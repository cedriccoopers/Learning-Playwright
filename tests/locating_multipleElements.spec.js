const { test, expect } = require('@playwright/test');

test('Multiple locators on a Page', async ({ page }) => {

    var urlToPage = 'https://www.demoblaze.com/index.html'
    await page.goto(urlToPage);

    //Get multiple links elements on a page

    /*
    const links = await page.$$('a')

    for (const link of links) {
        const linktext = await link.textContent();
        console.log(linktext);
    }
        */

    //Get multiple products on the screen
    //page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a")
    for (const product of products) {
        const productName = await link.textContent();
        console.log(productName);
    }

})