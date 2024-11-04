const asyncHandler = require("express-async-handler");


//@desc registered user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Register the user"});
});

//@desc login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Login the user"});
});

//@desc Current user
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Current user information "});
});

module.exports = {registerUser, loginUser, currentUser};