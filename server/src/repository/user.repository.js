const { TableUser, ObjectId } = require('../bd');

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

const updateUserDB = async (id, user) => {
    await TableUser.updateOne({ _id: new ObjectId(id) }, { $set: user })
    return await TableUser.find();
}

const deleteUserDB = async (id) => {
    await TableUser.deleteOne({ _id: new ObjectId(id) })
    return await TableUser.find();
}

module.exports = { getAllBD, getUserByEmailBD, createUserDB, updateUserDB, deleteUserDB }