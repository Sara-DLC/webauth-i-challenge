const express =require('express');
const apiRouter = require('./api-router.js');

const Middleware = require('./middleware');

const server = express();

Middleware(server);

server.use('/api', apiRouter);


module.exports = server;