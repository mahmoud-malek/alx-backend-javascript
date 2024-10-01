/**
 * Create a complex HTTP server using Node's HTTP module
 */

const http = require('http');
const url = require('url');
const students = require('./3-read_file_async');

const port = 1245;
const host = '127.0.0.1';

const app = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url).pathname;
  if (reqUrl === '/') {
    res.write('Hello Holberton School!');
  }
  if (reqUrl === '/students') {
    res.write('This is the list of our students\n');
    try {
      const data = await students(process.argv[2]);
      res.write(data.join('\n'));
    } catch (error) {
      res.write('This is the list of our students\n');
      res.write(error.message);
    }
  }
  res.end();
});

app.listen(port, host);
module.exports = app;
