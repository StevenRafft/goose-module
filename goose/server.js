const http = require('http');
const events = require('events')
const serverRequests = new events.EventEmitter();

serverRequests.on('server-running', request => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

serverRequests.on('exitprocessSIGTERM', () => {
    server.close(() => {
        console.log('Process terminated')
    })
})
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("HONK\n")
  res.end('Server being hosted by Goose module.');
});

server.listen(port, hostname, () => {
    serverRequests.emit("server-running")
});

process.on('SIGTERM', () => {
    serverRequests.emit("exitprocessSIGTERM")
})
module.exports.serverReqs = serverRequests
module.exports.website = server