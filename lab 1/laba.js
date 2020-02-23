const http = require('http');

const server = http.createServer((request, respone)=>{
    console.log("HTTP works!");
});

server.listen(8080);

