import React, { useRef, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

const boardDimensions = 500;
const squareSize = boardDimensions / 8;
const whiteSquare = "#FCFCFC";
const blackSquare = "#515963";

const defaultStart = [
	{ pieceId: "w-p-0", piecePos: "A2", moves: ["A3", "A4"] },
	{ pieceId: "w-p-1", piecePos: "B2", moves: ["B3", "B4"] },
	{ pieceId: "w-p-2", piecePos: "C2", moves: ["C3", "C4"] },
	{ pieceId: "w-p-3", piecePos: "D2", moves: ["D3", "D4"] },
	{ pieceId: "w-p-4", piecePos: "E2", moves: ["E3", "E4"] },
	{ pieceId: "w-p-5", piecePos: "F2", moves: ["F3", "F4"] },
	{ pieceId: "w-p-6", piecePos: "G2", moves: ["G3", "G4"] },
	{ pieceId: "w-p-7", piecePos: "H2", moves: ["H3", "H4"] },
	{ pieceId: "w-r-0", piecePos: "A1", moves: [] },
	{ pieceId: "w-r-1", piecePos: "H1", moves: [] },
	{ pieceId: "w-kn-0", piecePos: "B1", moves: ["A3", "C3"] },
	{ pieceId: "w-kn-1", piecePos: "G1", moves: ["F3", "H3"] },
	{ pieceId: "w-b-0", piecePos: "C1", moves: [] },
	{ pieceId: "w-b-1", piecePos: "F1", moves: [] },
	{ pieceId: "w-q-0", piecePos: "D1", moves: [] },
	{ pieceId: "w-k-0", piecePos: "A1", moves: [] },
	{ pieceId: "b-p-0", piecePos: "A7", moves: ["A6", "A5"] },
	{ pieceId: "b-p-1", piecePos: "B7", moves: ["B6", "B5"] },
	{ pieceId: "b-p-2", piecePos: "C7", moves: ["C6", "C5"] },
	{ pieceId: "b-p-3", piecePos: "D7", moves: ["D6", "D5"] },
	{ pieceId: "b-p-4", piecePos: "E7", moves: ["E6", "E5"] },
	{ pieceId: "b-p-5", piecePos: "F7", moves: ["F6", "F5"] },
	{ pieceId: "b-p-6", piecePos: "G7", moves: ["G6", "G5"] },
	{ pieceId: "b-p-7", piecePos: "H7", moves: ["H6", "H5"] },
	{ pieceId: "b-r-0", piecePos: "A8", moves: [] },
	{ pieceId: "b-r-1", piecePos: "H8", moves: [] },
	{ pieceId: "b-kn-0", piecePos: "B8", moves: ["A6", "C6"] },
	{ pieceId: "b-kn-1", piecePos: "G8", moves: ["F6", "H6"] },
	{ pieceId: "b-b-0", piecePos: "C8", moves: [] },
	{ pieceId: "b-b-1", piecePos: "F8", moves: [] },
	{ pieceId: "b-q-0", piecePos: "D8", moves: [] },
	{ pieceId: "b-k-0", piecePos: "A8", moves: [] },
];

const useStyles = createUseStyles({
	boardContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100vw",
		height: "100vh",
		flexBasis: "none",
	},
});

const Board = () => {
	const boardRef = useRef(null);
	const [shadowPieces, setShadowPieces] = useState(new Set(defaultStart));
	const classes = useStyles();

	useEffect(() => {
		const canvas = boardRef.current;
		const context = canvas.getContext("2d");
		context.translate(0.5, 0.5);
		let squareColor = whiteSquare;
		for (let row = 0; row < 8; row++) {
			for (let col = 0; col < 8; col++) {
				context.fillStyle = squareColor;
				context.fillRect(
					col * squareSize,
					row * squareSize,
					squareSize,
					squareSize
				);
				squareColor =
					squareColor === whiteSquare ? blackSquare : whiteSquare;
			}
			squareColor =
				squareColor === whiteSquare ? blackSquare : whiteSquare;
		}
	}, []);

	function handleClick(e) {}

	return (
		<div className={classes.boardContainer}>
			<canvas
				ref={boardRef}
				id="boardCanvas"
				width={boardDimensions}
				height={boardDimensions}
				onMouseDown={handleClick}
			></canvas>
		</div>
	);
};

function boardCoordsToRowCol(coordCode) {
	let row = null;
}

export default Board;
