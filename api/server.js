const express = require('express');
const cors = require('cors')
const Users = require('./user-model')

const server = express();

server.use(express.json())
server.use(cors())

server.get('/', (req,res) => {
    res.send(`<h1>${process.env.MESSAGE}</h1>`)
})

// server.get('/api/hello', (req,res) => {
//     res.send({message: 'api is working'})
// })


// server.use((err, req, res, next) => {
//     res.status(500).json({
//         message: err.message,
//         stack: err.stack,
//     })
// })

server.get('/api/users', (req, res) => [
    Users.findAll()
    .then(result => {
        res.json(result);
    })
])

server.post('/api/login', (req, res) => {
    let { username, password } = req.body;
    if(username === req.body.username && password === req.body.password) {
        res.send({ message: 'welcome '})
    } else { 
        console.log(error => {
            res.status(500).json({ message: 'where  the usernme or password at? '})
        })
    }
})

server.post('/api/register', (req,res)=> {
    let { name, username, password } = req.body;
    if(typeof username != 'string' || username === '') {
        res.status(400).json({ message: 'invalid username' });
        return;
    } else if(typeof password != 'string' || password === '') {
        res.status(400).json({ message: 'invalid password' });
        return;
    } else if(typeof name != 'string' || name === '') {
        res.status(400).json({ message: 'invalid name' });
        return;
    }
    name = name.trim();
    username = username.trim();
    password= password.trim();
    Users.add({ name: name, username: username, password: password })
        .then(user => {
            res.status(201).json(user);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error adding the user' });
        });
});

server.use('*', (req, res, next) => {
    res.send(`<h1>${process.env.MESSAGE}</h1>`)
    })

module.exports = server;