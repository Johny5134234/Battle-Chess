import React, { useState, useCallback, useEffect } from "react";
import { empty } from "../../util/Util";

const defaultState = {
	currentMode: "menu",
	transitionMode: null,
	setMode: empty,
};

let animationDirection = ["x", "100"];

const outgoingAnimation = (dir) => [
	{ opacity: 1 },
	{ opacity: 0, transform: `translate${dir[0]}(${100 * dir[1]}%)` },
];

const incomingAnimation = (dir) => [
	{ opacity: 0, transform: `translate${dir[0]}(${100 * -dir[1]}%)` },
	{ opacity: 1 },
];

function calculateAnimationDirection(direction) {
	switch (direction) {
		case "north":
			return ["Y", 100];
		case "east":
			return ["X", -100];
		case "south":
			return ["Y", -100];
		case "west":
			return ["X", 100];
		default:
			return ["Y", 100];
	}
}

const animationOptions = {
	duration: 400,
	fill: "both",
	easing: "ease-in",
};

export const AppContext = React.createContext(defaultState);

const AppNavigator = (props) => {
	const [context, setContext] = useState(defaultState);
	const outRef = useCallback((node) => {
		if (node && context.transitionMode)
			node.animate(
				outgoingAnimation(animationDirection),
				animationOptions
			);
	});
	const inRef = useCallback((node) => {
		if (node) {
			node.animate(
				incomingAnimation(animationDirection),
				animationOptions
			).addEventListener("finish", (event) => {
				setContext((prev) => ({
					...prev,
					transitionMode: null,
					currentMode: prev.transitionMode,
				}));
			});
		}
	});

	useEffect(() => {
		updateContext({
			setMode: switchMode,
		});
	}, []);

	function switchMode(modeId) {
		if (context.currentMode === modeId) return;
		if (context.currentMode && context.transitionMode) return;

		updateContext({
			transitionMode: modeId,
		});
	}

	function updateContext(modifications = {}) {
		setContext((currentContext) => ({
			...currentContext,
			...modifications,
		}));
	}

	return (
		<AppContext.Provider value={context}>
			<div>
				{React.Children.toArray(props.children)
					.filter(
						(mode) =>
							mode.props.modeId === context.currentMode ||
							mode.props.modeId == context?.transitionMode
					)
					.map((mode) => {
						if (mode.props.modeId === context.currentMode) {
							return React.cloneElement(mode, {
								refN: outRef,
							});
						} else {
							return React.cloneElement(mode, {
								refN: inRef,
							});
						}
					})}
			</div>
		</AppContext.Provider>
	);
};

export const Mode = (props) => {
	return <div ref={props.refN}>{props.children}</div>;
};

export default AppNavigator;
