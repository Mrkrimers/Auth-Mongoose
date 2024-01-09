const jwt = require('jsonwebtoken');

const createToken = (data) => {
    const dataToken = JSON.stringify(data);

    const token = jwt.sign(dataToken, 'secret');

    return token;
}

module.exports = { createToken };