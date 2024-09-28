import puppeteer from "puppeteer-core";

const scrapJob = async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto("https://leetcode.com/accounts/login/", {
    // waitUntil: "networkidle2",
    waitUntil: "networkidle2",
  });

  // await page.screenshot({ path: "./src/assets/hn.png" });
  // await page.pdf({path : "./src/assets/hn.pdf" });
  // await page.mouse.move(100, 100);
  // await page.locator("#content").wait();

  await page.locator("#id_login").fill("kambojsachin21");
  await page.locator("#id_password").fill("LeetCode.21");
  // await page.locator("#signin_btn").setTimeout(3000).hover();

  await page
    .locator("#JStsl2 input")
    .on(LocatorEvent.Action, () => {
      // willClick = true;
      console.log("clicking");
    })
    .click();
  await page
    .locator("#signin_btn")
    .setWaitForEnabled(true)
    .setTimeout(3000)
    .click();

  // await browser.close();
};

scrapJob();
