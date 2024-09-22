const { test, expect } = require('@playwright/test');
const { console } = require('inspector');

test('Title URL Test', async ({ page }) => {
    var urlToPage = 'https://www.demoblaze.com/index.html'
    await page.goto(urlToPage);

    const pageTitle = await page.title();
    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();
    console.log('Page URL is:', pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();

})