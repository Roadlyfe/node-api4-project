require('dotenv').config();

const server = require('./api/server');

console.log('process.env.PORT:', process.env.PORT);

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})