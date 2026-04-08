// Visoma Service Worker — caches static assets on first visit
const CACHE_NAME = 'visoma-cache-v1';

// Assets to pre-cache on install (critical path resources)
const PRECACHE_ASSETS = [
  '/',
  '/logo.png',
  '/favicon.ico',
];

// Install: pre-cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch: cache-first for static assets, network-first for pages
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip external URLs (analytics, emailjs, etc.)
  if (url.origin !== self.location.origin) return;

  // Cache-first for static assets (images, videos, fonts, CSS, JS)
  if (
    url.pathname.match(/\.(png|jpg|jpeg|webp|gif|svg|mp4|woff2?|ttf|eot|css|js|ico)$/) ||
    url.pathname.startsWith('/services/') ||
    url.pathname.startsWith('/_next/static/')
  ) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          // Only cache successful responses
          if (!response || response.status !== 200) return response;
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(() => cached);
      })
    );
    return;
  }

  // Network-first for HTML pages (ensures fresh content)
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
