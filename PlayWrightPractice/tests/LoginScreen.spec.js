const {test,expect} = require('@playwright/test')
const {LoginPage} = require('../pageobjects/LoginPage')

test('playwright test', async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://playwright.dev/')
    console.log(await page.title())
    await expect(page).toHaveTitle(/Playwright/)
});

test('browser test contaxt', async ({page})=>{
    await page.goto('https://google.com/')
    console.log(await page.title())
    await expect(page).toHaveTitle(/Google/)
});

test.only('login to rahulshettyacademy', async ({page})=>{  
    const username = 'rahulshettyacademy';
    const password = 'Learning@830$3mK2';
    const pagetitle = 'ProtoCommerce';
    const logipage = new LoginPage(page);
    await logipage.goToLandingPage();
    await logipage.validateLoginPageCheck(username, password, pagetitle);   
});

// test.only('verify login page title', async ({page})=>{
//     const pagetitle = 'ProtoCommerce';
//     const logipage = new LoginPage(page);
//     await logipage.getPageTitle(pagetitle);
//     //const getres = await logipage.getPageTitle(pagetitle);  
//     //console.log(getres);
// });

test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor(); // use this as alternative to above step fails
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 
})


test('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
 
 })