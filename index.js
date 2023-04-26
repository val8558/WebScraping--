const puppeteer = require('puppeteer');

(async () => { 
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   
   await page.goto('https://www.mercadolivre.com.br/nintendo-switch-32gb-mario-kart-8-deluxe-cor-vermelho-neon-azul-neon-e-preto/p/MLB13576607?pdp_filters=deal:MLB779362-1#searchVariation=MLB13576607&position=2&search_layout=grid&type=product&tracking_id=57e7ff82-7cb9-4ac1-880f-278bdd486e1f&c_id=/home/promotions-recommendations/element&c_element_order=3&c_uid=82cfa2a0-70bd-458e-a86f-09c326612e42');
   await page.screenshot({path: 'index.png'});
   
   await browser.close();
})();