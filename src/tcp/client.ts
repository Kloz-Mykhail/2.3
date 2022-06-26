import net from 'net';

const client = new net.Socket();
const port = 7070;
const host = '127.0.0.1';
client.connect(port, host, () => {
  console.log('Connected');
  const time = performance.now();
  client.write(`Hello From Client ${client.address().address}`);
  client.on('data', (data) => {
    console.log(`After: ${performance.now() - time}`);
    console.log(`Server Says : ${data}`);
  });
  client.on('close', () => {
    console.log('Connection closed');
  });
});
