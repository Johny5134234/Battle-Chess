import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	titleContainer: {
		display: "flex",
		fontFamily: ["Staatliches", "sans-serif"],
		fontSize: "6rem",
		cursor: "default",
		pointerEvents: "none",
	},
	char: {
		transition: "transform 0.3s, text-shadow 0.3s",
		margin: 0,
		minWidth: 38,
		textShadow: [[-4, 3, 0, "rgba(0, 0, 0, 0.39)"]],
		animation:
			"$slideTop 2s cubic-bezier(0.445, 0.050, 0.550, 0.950) infinite alternate both",
	},
	/*charExcited: {
    animationDuration: "0.3s"
  },*/
	"@keyframes slideTop": {
		from: {
			transform: "translateY(0)",
		},
		to: {
			transform: "translateY(-10px)",
		},
	},
	"@media (max-width: 530px)": {
		titleContainer: {
			fontSize: "5rem",
		},
		char: {
			minWidth: 28,
		},
	},
	"@media (max-width: 430px)": {
		titleContainer: {
			fontSize: "4rem",
		},
		char: {
			minWidth: 18,
		},
	},
});

const Title = (props) => {
	const [text, setText] = useState(props.children);
	//const [hovering, setHovering] = useState(false);
	const classes = useStyles();

	/*function handleHover(e) {
    setHovering(true);
  }

  function handleLeave(e) {
    setHovering(false);
  }*/

	return (
		<div className={classes.titleContainer}>
			{text.split("").map((char, index) => (
				<p
					className={classes.char}
					key={index}
					style={{ animationDelay: index / 2 + "s" }}
				>
					{char}
				</p>
			))}
		</div>
	);
};

export default Title;
