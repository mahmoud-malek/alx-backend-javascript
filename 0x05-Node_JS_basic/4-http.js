/**
 * Create a small HTTP server using Node's HTTP module
 */

const exp = require('node:constants');
const { createServer } = require('node:http');

const port = 1245;
const host = 'localhost';

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, host);
