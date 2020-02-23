const http = require('http'); // подключение модуля 
const fs = require('fs'); // подключение модуля для работы с файлом 

http.createServer((request, response) => {
    let data = '';
    fs.readFile("header.html", 'UTF-8', (err, fileData) => {
      if (err) {
        console.log('Не удалось найти или открыть файл для чтения\n');
        response.statusCode = 404;
        response.end();
      } else {
        data += fileData;
        fs.readFile("body.html", 'UTF-8', (err, fileData) => {
          if (err) {
            console.log('Не удалось найти или открыть файл для чтения\n');
            response.statusCode = 404;
            response.end();
          } else {
            data += fileData;
            fs.readFile("footer.html", 'UTF-8', (err, fileData) => {
              if (err) {
                console.log('Не удалось найти или открыть файл для чтения\n');
                response.statusCode = 404;
                response.end();
              } else {
                data += fileData;
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
              }
            });
          }
        });
      }
    });
    console.log("Запрос принят!\n");
  }).listen(8080, () => {
    console.log("HTTP-сервер работает в порту 8080!\n");
  });
 
// http.createServer((request, response) => {// вызов метода создания http сервера  
//     fs.readFile(filename, 'utf8', (err, data) => {   
//         if (err) {    
//             console.log('Could not find or open file for reading\n');    
//             response.statusCode = 404;   
//             response.end();   
//         } else {    
//             console.log(`The file ${filename} is read and sent to the client\n`);    
//             response.writeHead(200, {'Content-Type':'text/html'});    
//             response.end(data);   
//         }    
//     });    
//     console.log("Request accepted!"); 
// }).listen(8080, ()=>{  
//     console.log("HTTP server works in 8080 port!\n"); 
// }); 
 