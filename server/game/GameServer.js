const [Piece, PieceType] = require("./Piece");

const defaultPieces = {
	"p-w-0": new Piece(PieceType.PAWN, "w", "A2"),
	"p-w-1": new Piece(PieceType.PAWN, "w", "B2"),
	"p-w-2": new Piece(PieceType.PAWN, "w", "C2"),
	"p-w-3": new Piece(PieceType.PAWN, "w", "D2"),
	"p-w-4": new Piece(PieceType.PAWN, "w", "E2"),
	"p-w-5": new Piece(PieceType.PAWN, "w", "F2"),
	"p-w-6": new Piece(PieceType.PAWN, "w", "G2"),
	"p-w-7": new Piece(PieceType.PAWN, "w", "H2"),
	"r-w-0": new Piece(PieceType.ROOK, "w", "A1"),
	"r-w-1": new Piece(PieceType.ROOK, "w", "H1"),
	"kn-w-0": new Piece(PieceType.KNIGHT, "w", "B1"),
	"kn-w-1": new Piece(PieceType.KNIGHT, "w", "G1"),
	"b-w-0": new Piece(PieceType.BISHOP, "w", "C1"),
	"b-w-1": new Piece(PieceType.BISHOP, "w", "F1"),
	"q-w-0": new Piece(PieceType.QUEEN, "w", "D1"),
	"k-w-0": new Piece(PieceType.KING, "w", "E1"),
	"p-b-0": new Piece(PieceType.PAWN, "b", "A7"),
	"p-b-1": new Piece(PieceType.PAWN, "b", "B7"),
	"p-b-2": new Piece(PieceType.PAWN, "b", "C7"),
	"p-b-3": new Piece(PieceType.PAWN, "b", "D7"),
	"p-b-4": new Piece(PieceType.PAWN, "b", "E7"),
	"p-b-5": new Piece(PieceType.PAWN, "b", "F7"),
	"p-b-6": new Piece(PieceType.PAWN, "b", "G7"),
	"p-b-7": new Piece(PieceType.PAWN, "b", "H7"),
	"r-b-0": new Piece(PieceType.ROOK, "b", "A8"),
	"r-b-1": new Piece(PieceType.ROOK, "b", "H8"),
	"kn-b-0": new Piece(PieceType.KNIGHT, "b", "B8"),
	"kn-b-1": new Piece(PieceType.KNIGHT, "b", "G8"),
	"b-b-0": new Piece(PieceType.BISHOP, "b", "C8"),
	"b-b-1": new Piece(PieceType.BISHOP, "b", "F8"),
	"q-b-0": new Piece(PieceType.QUEEN, "b", "D8"),
	"k-b-0": new Piece(PieceType.KING, "b", "E8"),
};

class GameServer {
	static activeRooms = {};

	constructor(roomId, io) {
		this.roomId = roomId;
		this.io = io;
		this.pieces = defaultPieces;
		this.init();
		GameServer.activeRooms[roomId] = this;
	}

	async init() {
		let sockets = await this.io.in(this.roomId).fetchSockets();
		await this.initPlayers(sockets);
		await this.initGameEvents(sockets);
	}

	async initPlayers(sockets) {
		let randInt = getRandomInt(0, 1);
		this.white = sockets[randInt];
		this.black = sockets[Math.abs(randInt - 1)];
		this.white.emit("start-game", "white");
		this.black.emit("start-game", "black");
	}

	async initGameEvents(sockets) {
		sockets.forEach((socket) => {
			socket.on("move-request", (data) => {
				this.move(data);
				socket.to(this.roomId).emit("move-package", {
					movedPiece: { id: data.id, newPos: data.newPos },
				});
			});
		});
	}

	move(data) {
		console.log(this.white ? "white" : "", this.black ? "black" : "");
		console.log(this.pieces[data.id]);
		this.pieces[data.id].move(data.newPos);
		console.log(this.pieces[data.id]);
	}
}

const getRandomInt = function (min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = GameServer;
