import udp from 'dgram';

const server = udp.createSocket('udp4');

server.on('listening', () => {
  const address = server.address();
  const { port } = address;
  console.log(`Listening port: ${port}`);
});

server.on('message', (msg, info) => {
  console.log(`Data: ${msg.toString()}`);

  const response = Buffer.from(msg);
  server.send(response, info.port, 'localhost');
});
server.bind(3000);
