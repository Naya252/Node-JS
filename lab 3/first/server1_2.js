let http = require('http');
let fs = require('fs');

let pathname;
if (process.env.LANG.indexOf('ru') !== -1) {
  pathname = 'ru.html'
} else if (process.env.LANG.indexOf('en') !== -1) {
  pathname = 'en.html'
}

http.createServer((req, res) => {
  fs.readFile(pathname, 'UTF-8', (err, data) => {
    if (err) {
      console.log(`Возникла ошибка: ${err}`);
      res.statusCode = 404;
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}).listen(8080);