const puppeteer = require('puppeteer');
const url = 'https://www.mercadolivre.com.br/';
const ur2 = 'https://www.amazon.com.br/';
const searchFor = 'repetidor wi-fi';
let counter = 1;
const list = [];

    (async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        await page.goto(url);
        await page.waitForSelector("#cb1-edit");
        await page.type("#cb1-edit", 'repetidor wi-fi');
        await Promise.all([
            page.waitForNavigation(),
            page.click(".nav-search-btn")
        ])

        const links = await page.$$eval(".ui-search-result__image > a", el => el.map(link => link.href));

        for (link of links) {
            if (counter === 10) continue;
            console.log('Mercado livre pagina', counter)
            await page.goto(link);
            await page.waitForSelector(".ui-pdp-title")

            const title = await page.$eval(".ui-pdp-title", element => element.innerText);
            const price = await page.$eval(".andes-money-amount__fraction", element => element.innerText);

            const obj= {}

            obj.title = title;
            obj.price = price;
            obj.link = link;

            list.push(obj);

            console.log(list)


            counter++;
        }

        await browser.close()


    })();
