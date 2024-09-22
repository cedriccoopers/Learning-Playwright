const { test, expect } = require('@playwright/test');
const { console } = require('inspector');

test('Title URL Test', async ({ page }) => {
    var urlToPage =