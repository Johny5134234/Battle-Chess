class GameServer {
	constructor(sockets) {
		this.sockets = sockets;
		let playerCopy = new Set(sockets).values();
		this.white = playerCopy.next().value;
		this.black = playerCopy.next().value;
		console.log("started server!");
		console.log("WHITE: " + this.white);
		console.log("BLACK: " + this.black);
	}
}

module.exports = GameServer;
