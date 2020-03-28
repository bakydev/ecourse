const keys = require('../keys')

module.exports = function(email) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Registration has been created',
        html: `
            <h1>Welcome to our ecourse</h1>
            <p>You have been successfully created an account with - ${email}</p>
            <hr />
            <a href='${keys.BASE_URL}'>Eshop courses</a>
        `
    }
}