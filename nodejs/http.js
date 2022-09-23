const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('hello world');
        res.end();
    }
    if(req.url =='/api/products'){
        res.write('product listed');
        res.end();
    };
}
);
server.listen(3000);

console.log('server is listening on port 3000');