const express = require('express');

const server = express();

server.get('/', (req,res) => {
    res.send(`<h1>${process.env.MESSAGE}</h1>`);
});

module.exports = server;