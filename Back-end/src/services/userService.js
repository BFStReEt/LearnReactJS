import db from "../models/index";
import bcrypt from 'bcryptjs';

let handleLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};

            let isExit = await checkUserEmail(email);

            if (isExit) {
                //user already exist
                //compare password
                let user = await db.User.findOne({
                    where: { email: email },
                    attributes: ['email', 'roleId', 'password'],
                    where: { email: email },
                    raw: true
                });
                if (user) {
                    //compare password
                    let check = await bcrypt.compareSync(password, user.password);//false
                    if (check) {
                        userData.errCode = 0;
                        userData.errMassage = 'Ok';

                        delete user.password;
                        userData.user = user;
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMassage = 'Wrong password';
                    }

                }
                else {
                    userData.errCode = 2;
                    userData.errMassage = `User's not found`
                }

            }
            else {
                //return error
                userData.errCode = 1;
                userData.errMassage = `Your's Email isn't exits in your system. Please try other mail!`
            }

            resolve(userData);

        } catch (e) {
            reject(e);
        }
    })
}

let compareUserPassword = () => {
    return new Promise((resolve, reject) => {
        try {

        }
        catch (e) {
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