import { expect } from '@playwright/test';

class LoginPage {

constructor(page) {

    this.page = page;
    this.userName =  page.locator('#username');
    this.password =  page.locator('#password');
    this.signInBtn = page.locator('#signInBtn');
    this.cardTitle = page.locator('.card-body a');
}

async goToLandingPage() {
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    waitUntil: 'networkidle'
 } 

async validateLoginPageCheck(username, password,pagetitle) {
    // Add validation logic here
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.signInBtn.click();
    await expect(this.page).toHaveTitle(pagetitle);
}

// async getPageTitle(pagetitle) {
//     await expect(this.page).toHaveTitle(pagetitle);
// }
}

module.exports = {LoginPage};