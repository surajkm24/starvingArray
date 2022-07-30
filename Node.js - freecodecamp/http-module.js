// HTTP

const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req)
    res.write('Welcome to Masai!');
    res.end();
});

server.listen(5000)