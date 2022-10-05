// @ts-nocheck
import React, { useEffect, useId, useState } from "react";
import { createUseStyles } from "react-jss";
import { ColorType } from "../../util/Util";
import CheckIcon from "./CheckIcon";

function createCondition(desc, regex) {
	return { desc: desc, regex: regex, met: false };
}

const passwordTemplate = [
	createCondition("One or more uppercase letters", new RegExp("w*[A-Z]")),
	createCondition("One or more numbers", new RegExp("w*[0-9]")),
];

const useStylesText = createUseStyles((props) => ({
	container: {
		width: props.width || "100%",
		position: "relative",
	},
	textContainer: {
		position: "relative",
	},
	label: {
		fontSize: "3.3rem",
		position: "absolute",
		top: "50%",
		left: 10,
		transform: "translateY(-50%)",
		color: `${props.primaryColor || ColorType.TEXT}`,
		transition: "font-size 0.5s, transform 0.5s, top 0.5s, color 0.5s",
	},
	labelHidden: {
		fontSize: "1.6rem",
		top: 0,
		transform: "translateY(-100%)",
	},
	textEntry: {
		width: "100%",
		height: 85,
		fontSize: "3.2rem",
		fontFamily: "Oswald, sans-serif",
		color: `${props.primaryColor || ColorType.TEXT}`,
		border: [[2, "solid", `${props.primaryColor || ColorType.TEXT}`]],
		borderRadius: 5,
		backgroundColor: `${props.secondaryColor || ColorType.WHITE}`,
		padding: 10,
		transition: [
			["border", "0.5s"],
			["color", "0.5s"],
		],
		"&:focus": {
			outline: "none",
		},
	},
	error: {
		color: `${props.errorColor || ColorType.RED}`,
		"&[type]": {
			border: [[2, "solid", `${props.errorColor || ColorType.RED}`]],
		},
	},
}));

const useStylesConditions = createUseStyles((props) => ({
	conditionList: {
		position: "absolute",
		top: "50%",
		transform: "translateY(-50%)",
		right: -220,
		margin: 0,
		padding: 0,
		listStyle: "none",
		transition: [["opacity", "0.5s"]],
		opacity: 0,
	},
	condition: {
		transition: [["color", "0.5s"]],
		color: `${props.primaryColor || ColorType.TEXT}`,
		display: "flex",
	},
	conditionError: {
		color: `${props.errorColor || ColorType.RED}`,
	},
	conditionListFocused: {
		opacity: "100%",
	},
}));

const TextEntry = (props) => {
	const [text, setText] = useState("");
	const [focused, setFocused] = useState(false);
	const [error, setError] = useState(false);
	const classes = useStylesText(props);
	const id = useId();
	const [conditions, setConditions] = useState([]);

	useEffect(() => {
		setupConditions();
	}, []);

	function setupConditions() {
		let conditionList = [];

		if (props.password) {
			conditionList = passwordTemplate;
		}

		Object.values(conditionList).forEach(
			(condition) => (condition.met = false)
		);

		setConditions(conditionList);
	}

	function handleChange(e) {
		let text = e.target.value;
		if (conditions && text.length > 0) {
			setError(false);
			Object.values(conditions).forEach((condition) => {
				condition.met = condition.regex.test(text);
				if (!condition.met) {
					setError(true);
				}
			});
		} else {
			Object.values(conditions).forEach(
				(condition) => (condition.met = false)
			);
			setError(false);
		}
		setText(text);
	}

	function processLabelClasses() {
		let classString = classes.label;
		if (text.length > 0 || focused)
			classString += " " + classes.labelHidden;
		if (error) classString += " " + classes.error;
		return classString;
	}

	function handleFocus(e) {
		setFocused(true);
	}

	function handleBlur(e) {
		setFocused(false);
	}

	return (
		<div className={classes.container}>
			<div className={classes.textContainer}>
				<label htmlFor={id} className={processLabelClasses()}>
					{props.label}
				</label>
				<input
					id={id}
					className={
						error
							? classes.textEntry + " " + classes.error
							: classes.textEntry
					}
					type={props?.password ? "password" : "text"}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					value={text}
				/>
			</div>
			<Conditions
				conditions={conditions}
				focused={focused}
				primaryColor={props.primaryColor || ColorType.TEXT}
				errorColor={props.errorColor || ColorType.RED}
			></Conditions>
		</div>
	);
};

const Conditions = (props) => {
	const classes = useStylesConditions(props);

	if (props.conditions && props.conditions.length > 0) {
		return (
			<ol
				className={
					props.focused
						? classes.conditionList +
						  " " +
						  classes.conditionListFocused
						: classes.conditionList
				}
			>
				{props.conditions.map((condition, index) => (
					<li
						className={
							condition.met
								? classes.condition
								: classes.condition +
								  " " +
								  classes.conditionError
						}
						key={index}
					>
						<CheckIcon
							checked={condition.met}
							successColor={props.primaryColor}
							errorColor={props.errorColor}
						></CheckIcon>
						<p style={{ margin: 0 }}>{condition.desc}</p>
					</li>
				))}
			</ol>
		);
	}
	return <></>;
};

TextEntry.defaultProps = {
	primaryColor: ColorType.TEXT,
	secondaryColor: ColorType.WHITE,
	errorColor: ColorType.RED,
	password: false,
	conditions: [],
};

export default TextEntry;
