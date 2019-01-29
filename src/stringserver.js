var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.write("Hello World");
    res.end();
});
server.listen(process.env.PORT || 8080);
console.log("Listening on http://127.0.0.1:8080/");
