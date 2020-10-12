const question = require("./question");
const puppeteer = require('puppeteer');

const BASE_URL = 'https://www.google.com';
const SEARCH_TERM = 'Titanic Movie';

(async () => {
    const browser = await puppeteer.launch({headless: false}); //{headless: false} for visual
    const page = await browser.newPage();
  
    //Google Home Page
    await page.goto(BASE_URL, {waitUntil: 'networkidle0'});
    await page.type('[name=q]', SEARCH_TERM);
    await page.keyboard.press('Enter')
    await page.waitForTimeout(4000);
  
    const frontPage = await page.evaluate(() => {
        try {
            // get the movie title in its proper form (hyphens, colons, numbers) and uppercase it to make database entries consistent
            const t = document.querySelector('[data-attrid="title"]').innerText.toUpperCase();
            const ROTTEN_TOMATO_URL = document.querySelector('span[title="Rotten Tomatoes"]').parentNode.href;
            return {
                "title": t,
                "rottenTomatoes": ROTTEN_TOMATO_URL
            }
        } catch (error) {
            console.log("Title cannot be found");
        }
    });

    await page.waitForTimeout(1000);

    const providers = await page.evaluate(() => {
        try {
            // Get all the streaming services => filter the ones with Subscription listed => map the filtered platform titles to a new array
            const streamers = Array.from(document.querySelector('.nGOerd').querySelectorAll('div.ellip.phXTff'))
            .filter(provider => provider.querySelector('div.ellip.rsj3fb') != null && provider.querySelector('div.ellip.rsj3fb').innerText == "Subscription")
            .map(stream => stream.querySelector("div.ellip.bclEt").innerText);
            // turn the array into a single string where each element is partitioned by a hyphen
            const s = streamers.join('-');
            return s;
        } catch (error) {
            console.log("Subscription-based streaming service cannot be found");
        }
    });

    await page.goto(frontPage.rottenTomatoes, {waitUntil: 'networkidle0'});

    const poster = await page.evaluate(() => {
        try {
            return document.querySelector('img.posterImage').src;
        } catch (error) {
            console.log('poster URL not found');
        }
    });

    const results = {
        "title": frontPage.title,
        "services": providers,
        "poster": poster
    }

    console.log(results);
    await browser.close();

    question.askQuestion(results);

})();