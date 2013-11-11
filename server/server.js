var io = require('socket.io').listen(9000);
var colors = []; 

io.sockets.on('connection', function (socket) {
  
  socket.emit('newClient', { currentGrid: colors });
  
  socket.on('colorChanged', function (data) {
   
    colors = data.newColors;
    socket.broadcast.emit('colorUpdated', { currentGrid: colors });
  });

console.log("New client connected");

});

