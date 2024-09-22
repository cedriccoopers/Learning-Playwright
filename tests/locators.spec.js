const { test, expect } = require('@playwright/test');

test('Locators Test', async ({ page }) => {

    var urlToPage = 'https://www.demoblaze.com/index.html'
    await page.goto(urlToPage);

    //Click on Login button - property locator
    await page.locator('id=login2').click()
    //await page.click('id=login2')

    //Provide Username using CSS
    await page.locator('#loginusername').fill('pavanol')
    //await page.fill('#loginusername','pavanol')
    //await page.type('#loginusername','pavanol')

    //Provide Password using - CSS
    await page.fill("input[id='loginpassword']", 'test@123')

    //Click on login button - XPath
    await page.click("//button[normalize-space()='Log in']")

    //Verify logout link presence - XPath
    const logoutlink = await page.locator("//a[normalize-space()='Log out']")

    await expect(logoutlink).toBeVisible();

    await page.close();

})