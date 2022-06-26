import udp from 'dgram';

const client = udp.createSocket('udp4');
client.send(Buffer.from('Привет, я клиент 1'), 3000, 'localhost');
const now = performance.now();
client.on('message', (msg, inf) => {
  console.log(`Данные получены от сервера: ${msg.toString()}`);
  console.log('Получено %d байт от %s:%d n', msg.length, inf.address, inf.port);
  console.log(performance.now() - now);
});
