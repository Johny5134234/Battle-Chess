// @ts-nocheck
import React, { useContext, useState } from "react";
import { createUseStyles } from "react-jss";
import { ColorType, ChessIconType, empty } from "../../util/Util";
import ChessIcon from "./ChessIcon";
import NavContext from "../navigation/NavContext";

const defaultProps = {
	toggable: false,
	submit: false,
	primaryColor: ColorType.WHITE,
	secondaryColor: ColorType.TEXT,
	width: "100%",
	onClick: empty,
	type: ChessIconType.ROOK,
};

const useStyles = createUseStyles({
	button: (props) => ({
		width: "100%",
		height: 85,
		borderRadius: 5,
		// @ts-ignore
		border: [[2, "solid", `${props.secondaryColor}`]],
		// @ts-ignore
		backgroundColor: `${props.primaryColor}`,
		// @ts-ignore
		color: `${props.secondaryColor}`,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: 2,
		clipPath: "polygon(0 0, 105% 0, 100% 100%, 0% 100%)",
		transition: [["clip-path", "0.3s"]],
		"& p": {
			fontFamily: ["Staatliches", "sans-serif"],
			fontSize: "2.6rem",
			margin: 0,
		},
	}),
	buttonDark: (props) => ({
		// @ts-ignore
		border: [[2, "solid", `${props.primaryColor}`]],
		// @ts-ignore
		backgroundColor: `${props.secondaryColor}`,
		// @ts-ignore
		color: `${props.primaryColor}`,
		zIndex: 1,
	}),
	hoveredButton: {
		clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%) !important",
	},
	icon: {
		position: "absolute",
		top: "48%",
		right: 20,
		height: 45,
		transform: "translateY(-50%)",
		transition: ["right", "0.6s"],
		zIndex: 2,
	},
	iconLeft: {
		right: "calc(100% - 20px - 45px - 2px)",
	},
	buttonContainer: {
		// @ts-ignore
		width: (props) => props.width,
		height: 85,
		position: "relative",
		cursor: "pointer",
	},
	checkBox: (props) => ({
		position: "absolute",
		top: "calc(50% + 1px)",
		right: "calc(100% - 20px - 45px - 2px)",
		height: 45,
		width: 45,
		transform: "translateY(-50%)",
		zIndex: 1,
		borderRadius: 5,
		// @ts-ignore
		border: [[2, "solid", `${props.secondaryColor}`]],
		// @ts-ignore
		backgroundColor: `${props.primaryColor}`,
		transition: "border-color 0.6s, background-color 0.6s",
	}),
	checkedCheckBox: (props) => ({
		// @ts-ignore
		borderColor: `${props.primaryColor}`,
		// @ts-ignore
		backgroundColor: `${props.secondaryColor}`,
	}),
});

const Button = (props) => {
	const classes = useStyles(props);
	const context = useContext(NavContext);
	const [hovering, setHovering] = useState(false);
	const [toggled, setToggled] = useState(false);

	function handleMouseEnter() {
		setHovering(true);
	}

	function handleMouseLeave() {
		setHovering(false);
	}

	function handleClick() {
		if (props.toggable) setToggled((prev) => !prev);

		if (props.navTo) {
			context.setPage(props.navTo, context);
		}

		if (!props.onClick) return;

		props.onClick();
	}

	if (props.toggable) {
		return (
			<button
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={handleClick}
				className={classes.buttonContainer}
				type={props.submit ? "submit" : "button"}
			>
				<div
					className={
						hovering || toggled
							? classes.button + " " + classes.hoveredButton
							: classes.button
					}
				>
					<p>{props.children}</p>
					<ChessIcon className={classes.icon} type={props.type} />
					<div className={classes.checkBox} />
				</div>
				<div className={classes.button + " " + classes.buttonDark}>
					<p>{props.children}</p>
					<ChessIcon
						className={
							toggled
								? classes.icon + " " + classes.iconLeft
								: classes.icon
						}
						type={props.type}
					/>
					<div
						className={
							toggled || hovering
								? classes.checkBox +
								  " " +
								  classes.checkedCheckBox
								: classes.checkBox
						}
					/>
				</div>
			</button>
		);
	} else {
		return (
			<button
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className={classes.buttonContainer}
				onClick={handleClick}
				type={props.submit ? "submit" : "button"}
			>
				<div
					className={
						hovering
							? classes.button + " " + classes.hoveredButton
							: classes.button
					}
				>
					<p>{props.children}</p>
				</div>
				<div className={classes.button + " " + classes.buttonDark}>
					<p>{props.children}</p>
				</div>
			</button>
		);
	}
};

Button.defaultProps = defaultProps;
export default Button;
