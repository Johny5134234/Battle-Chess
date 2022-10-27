const PieceType = {
	PAWN: "p",
	ROOK: "r",
	KNIGHT: "kn",
	BISHOP: "b",
	QUEEN: "q",
	KING: "k",
};

class Piece {
	static PieceCount = {
		[PieceType.PAWN]: 0,
		[PieceType.ROOK]: 0,
		[PieceType.KNIGHT]: 0,
		[PieceType.BISHOP]: 0,
		[PieceType.QUEEN]: 0,
		[PieceType.KING]: 0,
	};

	// coords are stored in a [row - 0, column - 1] pair
	constructor(pieceType, pieceColor, coords) {
		this.pieceType = pieceType;
		this.pieceColor = pieceColor;
		this.coords = coords;

		let currentPieceCount = this.constructor.PieceCount[pieceType];
		this.pieceId = (() =>
			pieceColor + "-" + pieceType + "-" + currentPieceCount)();
		currentPieceCount = currentPieceCount + 1;
	}

	move(coords) {
		this.coords = coords;
	}
}

module.exports = [Piece, PieceType];
