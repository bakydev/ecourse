const keys = require('../keys')

module.exports = function(email, token) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Reset password',
        html: `
            <h1>Forgot password?</h1>
            <p>If is not, please ignore this letter</p>
            <p>Otherwise click the button below: </p>
            <p><a href='${keys.BASE_URL}/auth/password/${token}'>Reset password</a></p>
            <hr />
            <a href='${keys.BASE_URL}'>Eshop courses</a>
        `
    }
}
