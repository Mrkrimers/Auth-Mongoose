const { TableUser } = require('../bd');

const getAllBD = async () => {
    return await TableUser.find();
}

const getUserByEmailBD = async (user) => {
    return await TableUser.findOne({ email: user.email });
}

const createUserDB = async (user) => {
    await TableUser.create(user)
    return await TableUser.find();
}


module.exports = { getAllBD, getUserByEmailBD, createUserDB }