class LoginPage{

constructor(page){
    this.page = page
    this.username = page.locator('#username')
    this.password = page.locator('#password')
    this.signInBtn = page.locator('#signInBtn')
}
async login(username, password){
    await this.username.type(username)
    await this.password.type(password)
    await this.signInBtn.click()
}

async goto(){
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/')
}

}
module.exports = {LoginPage}