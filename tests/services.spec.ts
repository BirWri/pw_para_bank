import { test, expect } from '@playwright/test';

test.describe('Tables and rows', () => {

    test('Total number of rows in the table', async ({ page }) => {
        await page.goto('https://parabank.parasoft.com/parabank/services.htm')
        const headinOnServicePage = page.locator('#topPanel p.caption')
        await headinOnServicePage.textContent()
        expect(headinOnServicePage).toHaveText("Experience the difference")

    })
    

    
})
