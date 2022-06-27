import http from 'http';

const port = 8080;

const server = http.createServer().listen(port);
server.on('request', (req, res) => {
  console.log('Server get request');
  req.on('data', (chunk) => {
    console.log(chunk.toString());
    res.end(chunk.toString());
  });
});

server.on('listening', () => console.log('Server listening...'));
