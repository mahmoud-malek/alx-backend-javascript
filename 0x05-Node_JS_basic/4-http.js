/**
 * Create a small HTTP server using Node's HTTP module
 */

const http = require('http');

const port = 1245;
const host = '127.0.0.1';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(port, host);
module.exports = app;
