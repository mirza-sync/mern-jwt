import expressAsyncHandler from "express-async-handler"

// @desc Auth user/set token
// route POST api/users/auth
// @access Public
const authUser = expressAsyncHandler((req, res) => {
    res.status(200).json({ message: 'Auth user' })
})

// @desc Register a new user
// route POST api/users
// @access Public
const registerUser = expressAsyncHandler((req, res) => {
    res.status(200).json({ message: 'Register user' })
})

// @desc Logout user
// route POST api/users
// @access Public
const logoutUser = expressAsyncHandler((req, res) => {
    res.status(200).json({ message: 'Logout user' })
})

// @desc Get user profile
// route GET api/users/profile
// @access Private
const getUserProfile = expressAsyncHandler((req, res) => {
    res.status(200).json({ message: 'User profile' })
})

// @desc Update user profile
// route PUT api/users/profle
// @access Private
const updateUserProfile = expressAsyncHandler((req, res) => {
    res.status(200).json({ message: 'Update user profile' })
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
}