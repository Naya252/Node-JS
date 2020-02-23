const net = require('net');
const port = process.argv[2];

const server = net.createServer(function (socket) {
    let now = new Date(); 
    let month= now.getMonth()+1;  
    if(month<10) {
        month="0"+month;
    }
    let date = now.getFullYear()+"-"+month+"-"+now.getDate()+ " "+ now.getHours()+":"+now.getMinutes();
    socket.end(date + "\n" + "");
});

server.listen(port);