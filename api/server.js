const express =require('express');

const server = express();

server.use(express.json());

// server.use('/api');

module.exports = server;