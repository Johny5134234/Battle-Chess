export function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const ColorType = {
	LIGHT_BLUE: "var(--light-blue)",
	BLUE: "var(--blue)",
	GREEN: "var(--green)",
	RED: "var(--red)",
	WHITE: "var(--white)",
	TEXT: "var(--text)",
	LIGHT_TEXT: "var(--light-text)",
};

export const ChessIconType = {
	PAWN: "pawn",
	ROOK: "rook",
	KNIGHT: "knight",
	BISHOP: "bishop",
	QUEEN: "queen",
	KING: "king",
};

export function empty(...args) {}
