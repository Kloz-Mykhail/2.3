import http from 'http';

const port = 8080;
const now = performance.now();
const client = http.request(
  {
    port,
    method: 'POST',
    host: 'localhost',
  },
  (res) => {
    console.log('Get result');
    res.on('data', (chunk) => {
      console.log(chunk.toString());
      console.log(performance.now() - now);
    });
  }
);
client.write('Hello');
