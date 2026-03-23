# Visoma | AI Infrastructure & Automation

This is a premium Next.js application for Visoma, featuring a futuristic design and integrated AI tools.

## Asset Setup

### Logo Placement (CRITICAL)
To display the company logo correctly, the `public` folder must be at the **root level** of the project.
1. Ensure there is a folder named `public` at the project root (same level as `src/`).
2. **DO NOT** put the `public` folder inside `src/`.
3. Place your logo image file inside the root `public` folder.
4. Rename the file to `logo.png`.

**Correct Directory Structure:**
```
/visoma-app
  ├── public/
  │   └── logo.png  <-- Place logo here
  ├── src/
  ├── package.json
  └── ...
```

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS & Framer-like CSS animations
- **Components**: Shadcn UI (Radix UI)
- **Backend**: Firebase (Auth & Firestore)
- **AI**: Google Genkit with Gemini 2.5 Flash

## Deployment
This app is configured for Firebase App Hosting. See `apphosting.yaml` for configuration details.
