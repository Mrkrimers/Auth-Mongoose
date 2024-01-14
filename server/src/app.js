const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const user = require('./controller/user.controller');
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(`/user`, user);

app.use((err, req, res, _next) => res.sent(err.message))
module.exports = app;