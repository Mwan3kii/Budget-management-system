const dotenv = require('dotenv');
dotenv.config({path: '../config/config.env'});

const sendToken = (user, statusCode, res) => {
    // Create JWT token
    const token = user.getJwToken();
    
    // Set options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'DEVELOPMENT',
        sameSite: 'strict'
    };

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    });
};

module.exports = sendToken;