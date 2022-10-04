const { Server } = require("socket.io");
const GAME_PORT = process.env.GAME_PORT || 4527;

const init = () => {
	const io = new Server(GAME_PORT, {
		serveClient: false,
		cors: {
			origin: "http://localhost:8080",
		},
	});

	io.on("connection", (socket) => {
		socket.on("request-host", (roomId) => {
			if (!io.sockets.adapter.rooms.has(roomId)) {
				joinRoom(socket, roomId);
				socket.emit("join-game");
			} else {
				socket.emit("host-fail");
			}
		});

		socket.on("request-join", (roomId) => {
			if (io.sockets.adapter.rooms.has(roomId)) {
				if (socket.in(roomId)) {
					socket.emit("join-fail", true);
				} else {
					joinRoom(socket, roomId);
					socket.emit("join-game");
				}
			} else {
				socket.emit("join-fail", false);
			}
		});
	});
};

function joinRoom(socket, roomId) {
	if (socket.rooms) {
		socket.rooms.forEach((room) => {
			console.log(room);
			socket.leave(room);
		});
	}

	socket.join(roomId);
}

module.exports = init;
