/**
 * Create a small HTTP server using Node's HTTP module
 */

const { createServer } = require('node:http');

const port = 1245;
const host = 'localhost';

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(port, host);
module.exports = app;
