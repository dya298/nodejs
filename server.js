const http = require('http');
const server = http.createServer((req, res) => {
    console.log('run request...');
    res.setHeader('Content-type', 'application/json');
    res.end();
});
server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port 3000');
});