// Generates a single, deterministic resume.pdf from the built /resume page so
// the "Download PDF" button serves the exact same file on every OS/browser
// (no print dialog, clickable links preserved).
//
// Flow: serve the static export (out/) locally -> headless Chrome prints the
// résumé page to public/resume.pdf -> also copy it into out/ so the current
// build is deploy-ready. Run via `npm run resume:pdf` after `next build`.

import { createServer } from "node:http";
import { readFile, copyFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "out");
const publicPdf = path.join(root, "public", "resume.pdf");
const outPdf = path.join(outDir, "resume.pdf");
const BASE_PATH = "/portfolio"; // production basePath
const PORT = 8123;

const MIME = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".woff2": "font/woff2",
};

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].filter(Boolean);
  return candidates.find((p) => existsSync(p));
}

async function serveStatic() {
  const server = createServer(async (req, res) => {
    try {
      let urlPath = decodeURIComponent((req.url ?? "/").split("?")[0]);
      if (urlPath.startsWith(BASE_PATH)) urlPath = urlPath.slice(BASE_PATH.length) || "/";
      let filePath = path.join(outDir, urlPath);
      if (urlPath.endsWith("/")) filePath = path.join(filePath, "index.html");
      if (!existsSync(filePath) && existsSync(filePath + ".html")) filePath += ".html";
      const data = await readFile(filePath);
      res.writeHead(200, { "Content-Type": MIME[path.extname(filePath)] ?? "application/octet-stream" });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end("not found");
    }
  });
  await new Promise((resolve) => server.listen(PORT, resolve));
  return server;
}

async function main() {
  if (!existsSync(path.join(outDir, "resume", "index.html"))) {
    console.error("✖ out/resume/index.html not found. Run `next build` first.");
    process.exit(1);
  }
  const chrome = findChrome();
  if (!chrome) {
    console.error("✖ No Chrome/Chromium found. Set CHROME_PATH to a Chromium-based browser binary.");
    process.exit(1);
  }

  const server = await serveStatic();
  const url = `http://localhost:${PORT}${BASE_PATH}/resume/`;
  await mkdir(path.dirname(publicPdf), { recursive: true });

  await new Promise((resolve, reject) => {
    const child = spawn(chrome, [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--no-pdf-header-footer",
      `--print-to-pdf=${publicPdf}`,
      url,
    ]);
    child.on("error", reject);
    child.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`Chrome exited ${code}`))));
  });

  server.close();
  await copyFile(publicPdf, outPdf).catch(() => {});
  console.log(`✔ Generated ${path.relative(root, publicPdf)} (and copied into out/)`);
}

main();
