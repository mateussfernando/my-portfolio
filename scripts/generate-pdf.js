/**
 * Gera um PDF de página única (sem margem, com fundo) do portfólio.
 *
 * Uso:
 *   npm run pdf                              -> usa https://mateusfernando.com
 *   npm run pdf -- http://localhost:3000     -> usa outra URL
 *   npm run pdf -- https://mateusfernando.com portfolio.pdf
 */

const puppeteer = require("puppeteer");

const URL = process.argv[2] || "https://mateusfernando.com";
const OUT = process.argv[3] || "portfolio.pdf";
const WIDTH = 1920;

// Rola a página inteira para disparar as animações `whileInView` do framer-motion,
// senão seções entram no PDF invisíveis (opacity 0).
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const step = 250;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        total += step;
        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 80);
    });
  });
}

(async () => {
  console.log(`Abrindo ${URL} ...`);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: 1080, deviceScaleFactor: 2 });

  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });

  // espera as fontes carregarem
  await page.evaluate(() => document.fonts.ready);

  // dispara animações de entrada e estabiliza
  await autoScroll(page);
  await new Promise((r) => setTimeout(r, 1500));

  // altura real da página inteira
  const height = await page.evaluate(() =>
    Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
  );

  await page.pdf({
    path: OUT,
    width: `${WIDTH}px`,
    height: `${height}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  console.log(`PDF gerado: ${OUT}  (${WIDTH} x ${height}px)`);
})();
