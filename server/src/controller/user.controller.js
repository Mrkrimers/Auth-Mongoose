const route = require('express').Router();
const { buildResponse } = require('../helper/buildResponse')
const { getAll, createUser, authUser, updateUser, deleteUser } = require('../service/user.service');
const { createToken } = require('../helper/jwt');

route.get('/', async (req, res) => {
    try {
        buildResponse(res, 200, await getAll())
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.post('/', async (req, res) => {
    try {
        const data = await createUser(req.body)
        const token = createToken(data);

        res.cookie('access_token', token, {
            httpOnly: false,
            secure: true
        })

        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.post('/auth', async (req, res) => {
    try {
        const token = createToken(await authUser(req.body))

        res.cookie('access_token', token, {
            httpOnly: false,
            secure: true
        })

        buildResponse(res, 200, await authUser(req.body));
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.put('/:_id', async (req, res) => {
    try {
        buildResponse(res, 200, await updateUser(req.params._id, req.body))
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.delete('/:_id', async (req, res) => {
    try {
        buildResponse(res, 200, await deleteUser(req.params._id))
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})
module.exports = route;