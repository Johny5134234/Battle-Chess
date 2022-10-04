class GameServer {
	constructor(roomId, io) {
		this.roomId = roomId;
		this.io = io;
		this.initPlayers();
	}

	async initPlayers() {
		let sockets = await this.io.in(this.roomId).fetchSockets();
		this.white = sockets[0];
		this.black = sockets[1];
		this.white.emit("start-game", "white");
		this.black.emit("start-game", "black");
	}
}

module.exports = GameServer;
