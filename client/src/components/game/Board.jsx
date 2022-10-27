import React, { useRef, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import socket from "../../api/socket";
import _ from "lodash";

const boardDimensions = 500;
const squareSize = boardDimensions / 8;
const whiteSquare = "#d9d9d9";
const blackSquare = "#515963";

const defaultStart = {
	"p-w-0": { piecePos: "A2", moves: ["A3", "A4"] },
	"p-w-1": { piecePos: "B2", moves: ["B3", "B4"] },
	"p-w-2": { piecePos: "C2", moves: ["C3", "C4"] },
	"p-w-3": { piecePos: "D2", moves: ["D3", "D4"] },
	"p-w-4": { piecePos: "E2", moves: ["E3", "E4"] },
	"p-w-5": { piecePos: "F2", moves: ["F3", "F4"] },
	"p-w-6": { piecePos: "G2", moves: ["G3", "G4"] },
	"p-w-7": { piecePos: "H2", moves: ["H3", "H4"] },
	"r-w-0": { piecePos: "A1", moves: [] },
	"r-w-1": { piecePos: "H1", moves: [] },
	"kn-w-0": { piecePos: "B1", moves: ["A3", "C3"] },
	"kn-w-1": { piecePos: "G1", moves: ["F3", "H3"] },
	"b-w-0": { piecePos: "C1", moves: [] },
	"b-w-1": { piecePos: "F1", moves: [] },
	"q-w-0": { piecePos: "D1", moves: [] },
	"k-w-0": { piecePos: "E1", moves: [] },
	"p-b-0": { piecePos: "A7", moves: ["A6", "A5"] },
	"p-b-1": { piecePos: "B7", moves: ["B6", "B5"] },
	"p-b-2": { piecePos: "C7", moves: ["C6", "C5"] },
	"p-b-3": { piecePos: "D7", moves: ["D6", "D5"] },
	"p-b-4": { piecePos: "E7", moves: ["E6", "E5"] },
	"p-b-5": { piecePos: "F7", moves: ["F6", "F5"] },
	"p-b-6": { piecePos: "G7", moves: ["G6", "G5"] },
	"p-b-7": { piecePos: "H7", moves: ["H6", "H5"] },
	"r-b-0": { piecePos: "A8", moves: [] },
	"r-b-1": { piecePos: "H8", moves: [] },
	"kn-b-0": { piecePos: "B8", moves: ["A6", "C6"] },
	"kn-b-1": { piecePos: "G8", moves: ["F6", "H6"] },
	"b-b-0": { piecePos: "C8", moves: [] },
	"b-b-1": { piecePos: "F8", moves: [] },
	"q-b-0": { piecePos: "D8", moves: [] },
	"k-b-0": { piecePos: "E8", moves: [] },
};

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
	const [shadowPieces, setShadowPieces] = useState(defaultStart);
	const [currentPiece, setCurrentPiece] = useState(null);
	const [images, setImages] = useState({});
	const [color, setColor] = useState("");
	const [gameStarted, setGameStarted] = useState(false);
	const classes = useStyles();

	useEffect(() => {
		socket.on("start-game", (color) => {
			setColor(color);
			setGameStarted(true);
		});

		socket.on("move-package", (data) => {
			console.log("move!");
			setShadowPieces((prev) => {
				let pieceToChange = prev[data.movedPiece.id];
				pieceToChange.piecePos = data.movedPiece.newPos;
				return { ...prev, [data.movedPiece.id]: pieceToChange };
			});
		});
	}, []);

	useEffect(() => {
		const canvas = boardRef.current;
		const context = canvas.getContext("2d");

		drawBoard(context);
		if (color != "") {
			drawPieces(context);
		}
		if (currentPiece) {
			drawSelectedPiece(context);
		}
	}, [color, gameStarted, currentPiece, shadowPieces]);

	function drawSelectedPiece(ctx) {
		let squareCoords = boardCoordsToPixel(currentPiece.piecePos, color);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "yellow";
		ctx.strokeRect(
			squareCoords[0],
			squareCoords[1],
			squareSize,
			squareSize
		);
	}

	function drawPieces(ctx) {
		for (let pieceId in shadowPieces) {
			let pieceCoords = boardCoordsToPixel(
				shadowPieces[pieceId].piecePos,
				color
			);
			drawSvg(pieceId, pieceCoords[0], pieceCoords[1], ctx);
		}
	}

	function getImage(pieceId) {
		let imgFromStore = Object.keys(images).find(
			(piece) => piece === pieceId
		);
		if (imgFromStore) {
			return images[imgFromStore];
		} else {
			let img = new Image(squareSize, squareSize);
			let pieceData = getPropertiesFromId(pieceId);
			img.src = `icons/${pieceData[1]}/${pieceData[0]}.svg`;
			setImages((prev) => {
				return {
					...prev,
					[pieceId]: img,
				};
			});
			return img;
		}
	}

	function drawSvg(pieceId, x, y, ctx) {
		let img = getImage(pieceId);
		if (img.complete) {
			ctx.drawImage(img, x, y, squareSize, squareSize);
		} else {
			img.onload = () => {
				ctx.drawImage(img, x, y, squareSize, squareSize);
			};
		}
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

	function handleClick(e) {
		let x = e.pageX - (e.target.offsetLeft + e.target.clientLeft);
		let y = e.pageY - (e.target.offsetTop + e.target.clientTop);
		let square = pixelToBoardCoords([x, y], color);
		let selectedPiece = Object.values(shadowPieces).find(
			(piece) => piece.piecePos === square
		);
		let pieceId = Object.keys(shadowPieces).find(
			(key) => shadowPieces[key] === selectedPiece
		);

		if (!selectedPiece) {
			if (currentPiece) {
				socket.emit("move-request", {
					id: currentPiece.pieceId,
					newPos: square,
				});
				setCurrentPiece(null);
			}
		} else {
			let pieceData = getPropertiesFromId(pieceId);
			if (pieceData[1] != color) {
				setCurrentPiece(null);
			} else if (currentPiece) {
				if (_.isEqual({ pieceId, ...selectedPiece }, currentPiece)) {
					setCurrentPiece(null);
				} else {
					setCurrentPiece({ pieceId: pieceId, ...selectedPiece });
				}
			} else {
				setCurrentPiece({ pieceId: pieceId, ...selectedPiece });
			}
		}
	}

	if (!gameStarted) {
		return (
			<div className={classes.boardContainer}>
				<canvas
					className={classes.board}
					ref={boardRef}
					id="boardCanvas"
					width={boardDimensions}
					height={boardDimensions}
				></canvas>
			</div>
		);
	} else {
		if (color === "white") {
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
						onClick={handleClick}
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
						{[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
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
function pixelToBoardCoords(coords, color) {
	return rowColToBoardCoords(pixelToRowCol(coords), color);
}

function boardCoordsToRowCol(coordCode, color) {
	let row, col;
	if (color === "white") {
		row = 8 - coordCode[1];
	} else {
		row = coordCode[1] - 1;
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
function rowColToBoardCoords(coords, color) {
	let row, col;
	if (color === "white") {
		row = 8 - coords[0];
	} else {
		row = coords[0] + 1;
	}
	switch (coords[1]) {
		case 0:
			col = "A";
			break;
		case 1:
			col = "B";
			break;
		case 2:
			col = "C";
			break;
		case 3:
			col = "D";
			break;
		case 4:
			col = "E";
			break;
		case 5:
			col = "F";
			break;
		case 6:
			col = "G";
			break;
		case 7:
			col = "H";
			break;
	}

	return col + String(row);
}

function rowColToPixel(coords) {
	return [coords[1] * squareSize, coords[0] * squareSize];
}
function pixelToRowCol(coords) {
	return [
		Math.floor(coords[1] / squareSize),
		Math.floor(coords[0] / squareSize),
	];
}

function getPropertiesFromId(pieceId) {
	let properties = pieceId.split("-");
	properties[0] = expandPieceType(properties[0]);
	properties[1] = properties[1] === "w" ? "white" : "black";
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
