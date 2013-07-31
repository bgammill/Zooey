var io = require('socket.io').listen(1337);

io.sockets.on('connection', function(socket) {
	io.sockets.emit('newUser', {id: socket.id});

	socket.on('join:room', function(data) {
		socket.join(data.tag);
	});

	socket.on('new:pity', function(data) {
		io.sockets.in(data.tag).emit('new:pity', data);
	});
});