import userService from "../services/userService";

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs paremeter!'
        })
    }

    let userData = await userService.handleLogin(email, password);
    // Check email exist
    // Compare password
    // Return userInfor
    // Access_token: JWT json web token
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMassage,
        userData
    })
}

module.exports = {
    handleLogin: handleLogin
}