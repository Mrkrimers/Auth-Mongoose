const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swagger.json');
const cookieParser = require('cookie-parser');
const user = require('./controller/user.controller');
const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use(`/user`, user);

app.use((err, req, res, _next) => res.sent(err.message))
module.exports = app;