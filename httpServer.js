// Build Http Server
const http = require('https');
const port = process.env.PORT;
const server = http.createServer((req, res) => {
    res.statusCode = '200';
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Server Created</h1>')
});

server.listen(port, () => {
    console.log('Server is listening');
})