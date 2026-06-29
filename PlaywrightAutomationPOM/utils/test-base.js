const base = require('@playwright/test')

exports.customdata = base.test.extend({
    logindata:{
        username: 'rahulshettyacademy',
        password: 'Learning@830$3mK2'
    }

})
