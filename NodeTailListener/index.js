const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const Tail = require('tail').Tail;

// Please append your server.log file directory

var tail;
tail = new Tail('pathToFile/server.log');
tail.on('line', (data) => {
  io.emit('readNumber', data);
})
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
  

http.listen(3000, () => {
  console.log('Savio Node script started on *:3000');
});
