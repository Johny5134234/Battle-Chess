class Piece {
  static PieceCount = {
    PieceType.PAWN: 0,
    PieceType.ROOK: 0,
    PieceType.KNIGHT: 0,
    PieceType.BISHOP: 0,
    PieceType.QUEEN: 0,
    PieceType.KING: 0,
  }

  // coords are stored in a [row - 0, column - 1] pair
  constructor(pieceType, pieceColor, coords) {
    this.pieceType = pieceType;
    this.pieceColor = pieceColor;
    this.coords = coords;

    let currentPieceCount = this.constructor.PieceCount[pieceType]l
    this.pieceId = (() => pieceColor + "-" + pieceType + "-" + currentPieceCount)();
    currentPieceCount = currentPieceCount + 1;
  }



}

const PieceType = {
  PAWN: "p",
  ROOK: "r",
  KNIGHT: "k",
  BISHOP: "b",
  QUEEN: "q",
  KING: "k"
}