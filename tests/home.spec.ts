import { test, expect } from '@playwright/test';

test.describe('Verify the leftmenu list', () => {
    test('', async ({ page }) => {

        //Expected to be present
        const menuItems = [
            'Solutions',
            'About Us',
            'Services',
            'Products',
            'Locations',
            'Admin Page',
        ]

        await page.goto('https://parabank.parasoft.com/parabank/index.htm')

        //List of the menu items on the site
        const leftMenuList = page.locator('ul.leftmenu li')

        //Compare the 2 lists
        expect (await leftMenuList.allTextContents()).toEqual(menuItems)   
        
        //Verify the links
        const expectedLinks = [
            {href: 'about.htm'},
            {href: 'services.htm'},
            {href: 'http://www.parasoft.com/jsp/products.jsp'},
            {href: 'http://www.parasoft.com/jsp/pr/contacts.jsp'},
            {href: 'admin.htm'},
        ]

        // Loop through the links and compare them to each other
        for (const [index, leftMenuList] of expectedLinks.entries()){
            const link = leftMenuList.href
            await expect(link).toEqual(expectedLinks[index].href)
        }
        
    })
    
    
})
