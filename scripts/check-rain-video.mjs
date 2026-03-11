import fs from "node:fs/promises";
import puppeteer from "puppeteer-core";
const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const bytes = await fs.readFile("src/assets/smart-bench/rain-overlay.webm");
const dataUrl = `data:video/webm;base64,${bytes.toString("base64")}`;
const browser = await puppeteer.launch({executablePath: edgePath, headless: "new", args:["--mute-audio"]});
const page = await browser.newPage();
await page.setContent(`<video id="v" src="${dataUrl}"></video>`);
const meta = await page.evaluate(() => new Promise((resolve) => {
  const v = document.getElementById("v");
  v.addEventListener("loadedmetadata", () => resolve({duration: v.duration, width: v.videoWidth, height: v.videoHeight}));
  v.addEventListener("error", () => resolve({error: true}));
}));
console.log(JSON.stringify(meta));
await browser.close();
