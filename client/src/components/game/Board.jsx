import React, { useRef, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import socket from "../../api/socket";

const boardDimensions = 500;
const squareSize = boardDimensions / 8;
const whiteSquare = "#d9d9d9";
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
	{ pieceId: "w-k-0", piecePos: "E1", moves: [] },
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
	{ pieceId: "b-k-0", piecePos: "E8", moves: [] },
];

const useStyles = createUseStyles({
	boardContainer: {
		display: "grid",
		gridTemplateRows: `${squareSize}px ${boardDimensions}px ${squareSize}px`,
		gridTemplateColumns: `${squareSize}px ${boardDimensions}px ${squareSize}px`,
		gridTemplateAreas: `". tcol ."
			"lrow board rrow"
			". bcol ."`,
		width: "100vw",
		height: "100vh",
		justifyContent: "center",
		alignContent: "center",
	},
	board: {
		gridArea: "board",
	},
	row: {
		display: "flex",
		flexDirection: "column",
	},
	col: {
		display: "flex",
	},
	lrow: {
		gridArea: "lrow",
	},
	rrow: {
		gridArea: "rrow",
	},
	tcol: {
		gridArea: "tcol",
	},
	bcol: {
		gridArea: "bcol",
	},
	labelContainer: {
		height: squareSize,
		width: squareSize,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	squareLabel: {
		margin: 0,
		textAlign: "center",
		height: "fit-content",
	},
});

const Board = () => {
	const boardRef = useRef(null);
	const [shadowPieces, setShadowPieces] = useState(new Set(defaultStart));
	const [color, setColor] = useState("");
	const [gameStarted, setGameStarted] = useState(false);
	const classes = useStyles();

	socket.on("start-game", (color) => {
		console.log(`started ${color} game!`);
		setColor(color);
		setGameStarted(true);
	});

	useEffect(() => {
		const canvas = boardRef.current;
		const context = canvas.getContext("2d");
		context.translate(0.5, 0.5);
		drawBoard(context);
		if (color != "") {
			drawPieces(context);
		}
	}, [color, gameStarted]);

	function drawPieces(ctx) {
		for (let piece of shadowPieces) {
			let pieceData = getPropertiesFromId(piece.pieceId);
			let pieceCoords = boardCoordsToPixel(piece.piecePos, color);
			console.log(pieceData);
			drawSvg(
				pieceData[1],
				pieceData[0],
				pieceCoords[0],
				pieceCoords[1],
				ctx
			);
		}
	}

	function drawSvg(svg, color, x, y, ctx) {
		let img = new Image(squareSize, squareSize);
		img.src = `icons/${color}/${svg}.svg`;
		img.onload = () => {
			ctx.drawImage(img, x, y, squareSize, squareSize);
		};
	}

	function drawBoard(ctx) {
		let squareColor = whiteSquare;
		for (let row = 0; row < 8; row++) {
			for (let col = 0; col < 8; col++) {
				ctx.fillStyle = squareColor;
				ctx.fillRect(
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
	}

	function handleClick(e) {}

	if (!gameStarted) {
		return (
			<div className={classes.boardContainer}>
				<canvas
					className={classes.board}
					ref={boardRef}
					id="boardCanvas"
					width={boardDimensions}
					height={boardDimensions}
					onMouseDown={handleClick}
				></canvas>
			</div>
		);
	} else {
		if (color === "white") {
			return (
				<div className={classes.boardContainer}>
					<div className={classes.row + " " + classes.lrow}>
						{[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
							<div className={classes.labelContainer} key={value}>
								<p className={classes.squareLabel}>{value}</p>
							</div>
						))}
					</div>
					<div className={classes.col + " " + classes.tcol}>
						{["A", "B", "C", "D", "E", "F", "G", "H"].map(
							(value) => (
								<div
									className={classes.labelContainer}
									key={value}
								>
									<p className={classes.squareLabel}>
										{value}
									</p>
								</div>
							)
						)}
					</div>
					<canvas
						className={classes.board}
						ref={boardRef}
						id="boardCanvas"
						width={boardDimensions}
						height={boardDimensions}
						onMouseDown={handleClick}
					></canvas>
					<div className={classes.col + " " + classes.bcol}>
						{["A", "B", "C", "D", "E", "F", "G", "H"].map(
							(value) => (
								<div
									className={classes.labelContainer}
									key={value}
								>
									<p className={classes.squareLabel}>
										{value}
									</p>
								</div>
							)
						)}
					</div>
					<div className={classes.row + " " + classes.rrow}>
						{[1, 2, 3, 4, 5, 6, 7, 8].reverse().map((value) => (
							<div className={classes.labelContainer} key={value}>
								<p className={classes.squareLabel}>{value}</p>
							</div>
						))}
					</div>
				</div>
			);
		} else {
			return (
				<div className={classes.boardContainer}>
					<div className={classes.row + " " + classes.lrow}>
						{[1, 2, 3, 4, 5, 6, 7, 8].reverse().map((value) => (
							<div className={classes.labelContainer} key={value}>
								<p className={classes.squareLabel}>{value}</p>
							</div>
						))}
					</div>
					<div className={classes.col + " " + classes.tcol}>
						{["A", "B", "C", "D", "E", "F", "G", "H"].map(
							(value) => (
								<div
									className={classes.labelContainer}
									key={value}
								>
									<p className={classes.squareLabel}>
										{value}
									</p>
								</div>
							)
						)}
					</div>
					<canvas
						className={classes.board}
						ref={boardRef}
						id="boardCanvas"
						width={boardDimensions}
						height={boardDimensions}
						onMouseDown={handleClick}
					></canvas>
					<div className={classes.col + " " + classes.bcol}>
						{["A", "B", "C", "D", "E", "F", "G", "H"].map(
							(value) => (
								<div
									className={classes.labelContainer}
									key={value}
								>
									<p className={classes.squareLabel}>
										{value}
									</p>
								</div>
							)
						)}
					</div>
					<div className={classes.row + " " + classes.rrow}>
						{[1, 2, 3, 4, 5, 6, 7, 8].reverse().map((value) => (
							<div className={classes.labelContainer} key={value}>
								<p className={classes.squareLabel}>{value}</p>
							</div>
						))}
					</div>
				</div>
			);
		}
	}
};

function boardCoordsToPixel(coordCode, color) {
	return rowColToPixel(boardCoordsToRowCol(coordCode, color));
}

function boardCoordsToRowCol(coordCode, color) {
	let row, col;
	if (color == "white") {
		row = coordCode[1] - 1;
	} else {
		row = 8 - coordCode[1];
	}
	switch (coordCode[0]) {
		case "A":
			col = 0;
			break;
		case "B":
			col = 1;
			break;
		case "C":
			col = 2;
			break;
		case "D":
			col = 3;
			break;
		case "E":
			col = 4;
			break;
		case "F":
			col = 5;
			break;
		case "G":
			col = 6;
			break;
		case "H":
			col = 7;
			break;
	}
	return [row, col];
}

function rowColToPixel(coords) {
	return [coords[1] * squareSize, coords[0] * squareSize];
}

function getPropertiesFromId(pieceId) {
	let properties = pieceId.split("-");
	properties[0] = properties[0] === "w" ? "white" : "black";
	properties[1] = expandPieceType(properties[1]);
	return properties;
}

function expandPieceType(pieceType) {
	switch (pieceType) {
		case "p":
			return "pawn";
		case "r":
			return "rook";
		case "kn":
			return "knight";
		case "b":
			return "bishop";
		case "q":
			return "queen";
		case "k":
			return "king";
	}
}

export default Board;
