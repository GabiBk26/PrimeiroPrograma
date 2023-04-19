const http = require('http')

const hostname = '127.00.01';// Endereço do servidor
const port = 3000; // porta do servidor

const server = http.createServer((req, res )=> {// criando o servidor
   res.statusCode = 200; // status ok de empresa

   res.setHeader ('content-type', 'text/plain ');
   res.end('ola Meu nome GabiBk26');
   
});

server.listen(port,hostname,()=>{
    console.log(`servidor rodando em http://${hostname};${port}/`)
})