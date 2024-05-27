import expressAsyncHandler from "express-async-handler"
// @desc Auth user/set token
// route POST api/users/auth
// @access Public
const authUser = expressAsyncHandler((req, res) => {
    res.status(200).json({ message: 'Auth user' })
})

export { authUser }