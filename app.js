// server.js
const http = require('http');
const https = require('https');
const { parse } = require('url');
const fs = require('fs');
const next = require('next');
const path = require('path');

// const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer({}, (req, res) => {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
      if (pathname === '/.well-known/pki-validation/fileauth.txt') {
        fs.readFile(__dirname + '/fileauth.txt', (err, contents) => {
          res.setHeader('Content-Type', 'text/plain');
          res.writeHead(200);
          res.end(contents);
        });
      } else if (pathname === '/a') {
        app.render(req, res, '/a', query);
      } else if (pathname === '/b') {
        app.render(req, res, '/b', query);
      } else {
        handle(req, res, parsedUrl);
      }
    })
    .listen(80, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  // httpServer.on('request', (request, response) => {
  //   response.writeHead(301, { Location: 'https://www.qiushipharm.com/' });
  //   response.end();
  // });
});

// const httpServer = http
//   .createServer((request, response) => {
//     response.writeHead(301, { Location: 'https://www.qiushipharm.com/' });
//     response.end();
//   })
//   .listen(80);
