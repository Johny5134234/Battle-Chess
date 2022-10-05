const { Server } = require("socket.io");
const GameServer = require("./GameServer");
const GAME_PORT = process.env.GAME_PORT || 4527;

let io = null;

const init = () => {
	io = new Server(GAME_PORT, {
		serveClient: false,
		cors: {
			origin: "http://localhost:8080",
		},
	});

	io.on("connection", (socket) => {
		console.log("connection");
		socket.on("request-host", async (roomId) => {
			if (!io.sockets.adapter.rooms.has(roomId)) {
				let joined = await joinRoom(socket, roomId);
				if (joined) socket.emit("join-game");
			} else {
				socket.emit("host-fail");
			}
		});

		socket.on("request-join", async (roomId) => {
			if (io.sockets.adapter.rooms.has(roomId)) {
				// check for if socket is already in room? idk, sounds kinda bullshit
				if (false) {
					socket.emit("join-fail", true);
				} else {
					let joined = await joinRoom(socket, roomId);
					if (joined) socket.emit("join-game");
				}
			} else {
				socket.emit("join-fail", false);
			}
		});
	});
};

async function joinRoom(socket, roomId) {
	let connectedPlayers = io.sockets.adapter.rooms.get(roomId);
	if (connectedPlayers?.size === 2) return false; // might want to add spectator stuff here

	if (socket.rooms) {
		socket.rooms.forEach((room) => {
			socket.leave(room);
		});
	}
	await socket.join(roomId);
	if (connectedPlayers?.size === 2) {
		if (GameServer.activeRooms) {
			if (!Object.keys(GameServer.activeRooms).includes(roomId)) {
				new GameServer(roomId, io);
			}
		} else {
			new GameServer(roomId, io);
		}
	}
	return true;
}

module.exports = init;
