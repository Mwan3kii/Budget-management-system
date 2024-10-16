const sendToken = (user, statusCode, res) => {
    const expireTime = parseInt(process.env.COOKIE_EXPIRATION_TIME, 10);
    const token = user.getJwToken();
    const options = {
        expires: new Date(
            Date.now() + expireTime * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'DEVELOPMENT',
    };

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    });
};

module.exports = sendToken;