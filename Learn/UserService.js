import db from '../models/index'

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                row: true
            });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    })
}

let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true,
            })

            if (user) {
                resolve(user);
            }
            else {
                resolve({});
            }

        } catch (e) {
            reject(e);
        }
    })
}

let deleteUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            })

            if (user) {
                user.destroy();
            }

            resolve(); // == return;
        } catch (e) {
            reject(e);
        }
    })
}

router.post('/', async function (req, res, next) {
    try {
        let newBook = new bookModel({
            name: req.body.name,
            year: req.body.year,
            author: req.body.author,
        })
        await newBook.save();
        responseHandle.renderResponse(res, true, newBook);
    } catch (error) {
        responseHandle.renderResponse(res, false, error);
    }
});
router.put('/:id', async function (req, res, next) {
    try {
        var book = await bookModel.findByIdAndUpdate
            (req.params.id, req.body, {
                new: true
            })
        responseHandle.renderResponse(res, true, book);
    } catch (error) {
        responseHandle.renderResponse(res, false, error);
    }
});

module.exports = {
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    deleteUserById: deleteUserById,
}