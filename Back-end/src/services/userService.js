import db from "../models/index";

let handleLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            
            let isExit = await checkUserEmail(email);

            if (isExit) {
                //user already exist
                //compare password
                resolve();
            }
            else {
                //return error
                userData.errCode = 1;
                userData.errMassage = `Your's Email isn't exits in your system. Please try other mail!`
                resolve();
            }
        } catch (e) {
            reject(e);
        }
    })
}

let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    handleLogin: handleLogin
}