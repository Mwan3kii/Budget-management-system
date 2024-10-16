const User = require('../models/user');
const catchAsyncError = require('../middleware/catchAsyncErrors');
const sendToken = require('../utils/jwtokens');
const ErrorHandler = require('../utils/errorHandler');

// Register user => /api/v1/register
exports.registerUser = catchAsyncError (async(req, res, next) => {
    
    const { name, email, bio, password } = req.body;
   
    const user = await User.create({
        name,
        email, 
        bio, 
        password
    });

    sendToken(user, 200, res);
});

