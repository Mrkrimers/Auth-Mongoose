const { getAllBD, getUserByEmailBD, createUserDB } = require('../repository/user.repository');
const bcrypt = require('bcrypt')

const salt = 10;

const getAll = async () => {
    return await getAllBD();
}

const createUser = async (user) => {
    const foundUser = await getUserByEmailBD(user);
    if (foundUser !== null) throw new Error(`This Email exist`)

    const hash = await bcrypt.hash(user.password, salt)

    return await createUserDB({ ...user, password: hash });
}

const authUser = async (user) => {
    const foundUser = await getUserByEmailBD(user);
    if (foundUser === null) throw new Error(`This Email don't found`);

    if (!(await bcrypt.compare(user.password, foundUser.password))) throw new Error(`PWD do not match`);

    return foundUser;
}


module.exports = { getAll, createUser, authUser }