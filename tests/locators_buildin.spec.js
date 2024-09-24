const { test, expect } = require('@playwright/test');

/*
page.getByAltText() - to locate an element, usually image, by its text alternative
page.gtByPlaceholder() - to locate an input by placeholder
page.getByRole() - to locate by explicit and implicit accessibility attributes
page.getByText() - to locate by text content.

page.getByLabel() - to locate a form control by associated label's text
page.getByTitle() - to locate an element by its title attribute
page.getByTestId() - to locate an element based on its data-testid attribute (other attributes can be)
*/

test('Build-in locators', async ({ page }) => {

    var urlToPage = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    await page.goto(urlToPage);

    //page.getByAltText() - to locate an element, usually image, by its text alternative
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //page.gtByPlaceholder() - to locate an input by placeholder
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    //page.getByRole() - to locate by explicit and implicit accessibility attributes
    await page.getByRole('button', { type: 'submit' }).click()

    //page.getByText() - to locate by text content.
    const usernameText = await page.getByText('vishwas dsaddasdfs')
    await expect(usernameText).toBeVisible()

})