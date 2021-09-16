const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Hello kelvin, welcome to AWS Cloud!");
});
server.listen(3000);
