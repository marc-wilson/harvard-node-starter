const http = require('http');
const server = http.createServer( (req, res) => {
    res.writeHead(200);
    res.write(`Hello World, the current time is ${new Date()}`);
    res.end();
});
const port = process.env.PORT || 8080;
server.listen(port);
console.log(`Listening on http://127.0.0.1:${port}/`);
