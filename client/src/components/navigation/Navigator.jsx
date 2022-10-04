// @ts-nocheck
import React, {
	useState,
	useContext,
	useEffect,
	useRef,
	useCallback,
} from "react";
import { createUseStyles } from "react-jss";
import NavContext, { defaultNavContext } from "./NavContext";
import NavigatorBreadcrumbs from "./NavigatorBreadcrumbs";
import NavigatorBack from "./NavigatorBack";

let animationDirection = 1;

const outgoingAnimation = (dir) => [
	{
		opacity: 1,
	},
	{
		opacity: 0,
		transform: `translateX(${100 * -dir}%)`,
	},
];

const incomingAnimation = (dir) => [
	{ opacity: 0, transform: `translateX(${100 * dir}%)` },
	{ opacity: 1 },
];

const animationOptions = {
	duration: 200,
	fill: "both",
	easing: "ease-in",
};

const useStyles = createUseStyles({
	navHelper: {
		width: "100%",
		position: "relative",
		marginBottom: 20,
	},
	nav: {
		width: "80vw",
		maxWidth: 600,
		position: "relative",
	},
});

const Navigator = (props) => {
	const [context, setContext] = useState(defaultNavContext);
	const outRef = useCallback((node) => {
		if (node && context.transitionPage)
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
					transitionPage: null,
					currentPage: prev.transitionPage,
				}));
			});
		}
	});
	const classes = useStyles();

	useEffect(() => {
		let newPages = props.children.map((page) => ({
			pageId: page.props.pageId,
			owner: page.props.owner || "none",
		}));

		updateContext({
			pages: newPages,
			setPage: switchPage,
			backPage: backPage,
		});
	}, []);

	function switchPage(pageId, currentContext) {
		if (currentContext.currentPage.pageId === pageId) return;
		if (currentContext.currentPage && currentContext.transitionPage) return;

		animationDirection = currentContext.trail.some(
			(trailPage) => trailPage.pageId === pageId
		)
			? -1
			: 1;

		let newPage = findPage(pageId, currentContext);
		let newTrail = generateNewTrail(pageId, currentContext);

		updateContext({
			transitionPage: newPage,
			trail: newTrail,
		});
	}

	function backPage(currentContext) {
		switchPage(currentContext.currentPage.owner, currentContext);
	}

	function generateNewTrail(pageId, currentContext) {
		let workingPage = findPage(pageId, currentContext);
		let newTrail = [workingPage];

		while (workingPage.owner != "none") {
			workingPage = findPage(workingPage.owner, currentContext);
			newTrail = [workingPage, ...newTrail];
		}

		return newTrail;
	}

	function findPage(pageId, currentContext) {
		let page = currentContext.pages.find((page) => page.pageId === pageId);
		if (page === undefined) {
			throw new Error("Page not found!");
		}
		return page;
	}

	function updateContext(modifications = {}) {
		setContext((currentContext) => ({
			...currentContext,
			...modifications,
		}));
	}

	if (props.breadcrumbs) {
		return (
			<NavContext.Provider value={context}>
				<div className={classes.navHelper}>
					<NavigatorBack />
					<NavigatorBreadcrumbs />
				</div>
				<div className={classes.nav}>
					{React.Children.toArray(props.children)
						.filter(
							(navPage) =>
								navPage.props.pageId ===
									context.currentPage.pageId ||
								navPage.props.pageId ==
									context.transitionPage?.pageId
						)
						.map((navPage) => {
							if (
								navPage.props.pageId ===
								context.currentPage.pageId
							) {
								return React.cloneElement(navPage, {
									refN: outRef,
								});
							} else {
								return React.cloneElement(navPage, {
									refN: inRef,
								});
							}
						})}
				</div>
			</NavContext.Provider>
		);
	}

	return (
		<NavContext.Provider value={context}>
			<div className={classes.nav}>
				{props.children.find(
					(navPage) =>
						navPage.props.pageId === context.currentPage.pageId
				)}
			</div>
		</NavContext.Provider>
	);
};

export default Navigator;
