import net from 'net';

const port = 7070;
const host = '127.0.0.1';

const server = net.createServer();

server.listen(port, host, () => {
  console.log(`TCP Server is running on port ${port}.`);
});
const sockets: net.Socket[] = [];
server.on('connection', (sock) => {
  console.log(`CONNECTED: ${sock.remoteAddress}:${sock.remotePort}`);
  sockets.push(sock);
  sock.on('data', (data) => {
    console.log(`DATA ${sock.remoteAddress}: ${data}`);
    // Write the data back to all the connected, the client will receive it as data from the server
    sockets.forEach((socket) => {
      socket.write(`${sock.remoteAddress}:${sock.remotePort} said ${data}\n`);
    });
  });
  sock.on('close', () => {
    const index = sockets.findIndex(
      (o) =>
        o.remoteAddress === sock.remoteAddress &&
        o.remotePort === sock.remotePort
    );
    if (index !== -1) sockets.splice(index, 1);
    console.log(`CLOSED: ${sock.remoteAddress} ${sock.remotePort}`);
  });
});
