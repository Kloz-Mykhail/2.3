import udp from 'dgram';

const client = udp.createSocket('udp4');
client.send(Buffer.from('Hello server'), 3000, 'localhost');
const now = performance.now();
client.on('message', (msg, inf) => {
  console.log(`Data: ${msg.toString()}`);
  console.log('Get %d bites from %s:%d n', msg.length, inf.address, inf.port);
  console.log(performance.now() - now);
});
