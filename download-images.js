const fs = require('fs');
const https = require('https');
const prompts = [
  "neural-network-cloud-integration-architecture-blue-glow",
  "abstract-prompt-engineering-programming-code-cyan",
  "robotic-process-workflow-automation-factory-digital",
  "futuristic-cyborg-web-design-ui-interface",
  "ai-knowledge-retrieval-system-glowing-nodes",
  "ai-computer-vision-semantic-segmentation-overlay",
  "global-data-points-curation-matrix-network",
  "human-ai-alignment-feedback-loop-interface",
  "custom-dataset-library-collection-holographic",
  "massive-data-scraping-server-extraction-cyan",
  "cybersecurity-anti-bot-resilience-shield-network",
  "real-time-data-monitoring-dashboard-alerts",
  "structured-data-delivery-pipeline-glowing-cubes",
  "semantic-keyword-clustering-node-map-orange",
  "generative-ai-growth-rocket-digital-marketing",
  "large-language-model-search-optimization-engine",
  "futuristic-brand-architecture-digital-identity",
  "financial-risk-modeling-ai-prediction-emerald",
  "global-financial-market-intelligence-hologram",
  "ai-predictive-metrics-roi-graph-upwards",
  "high-speed-algorithmic-trading-terminal",
  "ai-legal-contract-analysis-scanning-document",
  "ai-legal-document-discovery-search-hologram",
  "autonomous-compliance-monitoring-agent-security",
  "secure-ai-ethics-consulting-lock-shield",
  "custom-rag-chatbot-knowledge-base-interface-customer-support",
  "automated-scraping-lead-enrichment-pipeline-dashboard-metrics",
  "medical-imagery-annotation-cancer-detection-ai-hologram"
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => { file.close(resolve); });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        reject(`Failed to download ${url}: ${response.statusCode}`);
      }
    }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err.message); });
  });
}

(async () => {
  fs.mkdirSync('./public/services', { recursive: true });
  for (let i = 0; i < prompts.length; i++) {
    const url = `https://image.pollinations.ai/prompt/${prompts[i]}?width=600&height=400&nologo=true`;
    console.log(`Downloading ${i+1}/${prompts.length}: ${prompts[i]}`);
    let success = false;
    let retries = 0;
    while (!success && retries < 3) {
      try {
        await downloadFile(url, `./public/services/img-${i}.jpg`);
        success = true;
        await new Promise(r => setTimeout(r, 1200)); // 1.2s delay to fully bypass 429 limitations
      } catch (e) {
        retries++;
        console.error(`Retry ${retries} for ${prompts[i]}: ${e}`);
        await new Promise(r => setTimeout(r, 3000));
      }
    }
  }
  console.log("All downloads complete!");
})();
