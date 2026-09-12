import { chromium } from "playwright";

const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-dev-shm-usage"] });

const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.getByRole("button", { name: "Run" }).click();
await page.waitForTimeout(3500);
await page.screenshot({ path: "/workspace/screenshots/helix-running.png", fullPage: false });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await mobile.waitForTimeout(600);
const overflow = await mobile.evaluate(() => {
  const doc = document.documentElement;
  return { scrollWidth: doc.scrollWidth, clientWidth: doc.clientWidth, overflow: doc.scrollWidth > doc.clientWidth + 2 };
});
await mobile.screenshot({ path: "/workspace/screenshots/helix-mobile.png", fullPage: true });

await page.setViewportSize({ width: 1200, height: 630 });
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.waitForTimeout(500);
await page.screenshot({ path: "/workspace/public/og.jpg", type: "jpeg", quality: 82 });

console.log(JSON.stringify({ errors, overflow }, null, 2));
await browser.close();
