import React from "react";
import { useContext } from "react";
import { createUseStyles } from "react-jss";
import NavContext from "./NavContext";

const useStyles = createUseStyles({
	crumbContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		color: "var(--light-text)",
	},
	crumbList: {
		margin: 0,
		padding: 0,
		listStyle: "none",
		display: "flex",
		flexDirection: "row",
		"& > *": {
			padding: [[0, 3]],
		},
	},
	crumbItem: {
		fontSize: "1.4rem",
		cursor: "pointer",
		"&:not(:last-child)::after": {
			content: '" => "',
			paddingLeft: 3,
		},
		"&:last-child": {
			color: "var(--blue)",
		},
	},
});

const NavigatorBreadcrumbs = (props) => {
	const classes = useStyles();
	const context = useContext(NavContext);

	function handleNavigation(e, pageId) {
		context.setPage(pageId, context);
	}

	if (!context.trail) return <nav className={classes.crumbContainer}></nav>;

	return (
		<nav className={classes.crumbContainer}>
			<ol className={classes.crumbList}>
				{context.trail.map(({ pageId }) => (
					<li
						className={classes.crumbItem}
						onClick={(e) => handleNavigation(e, pageId)}
						key={"breadcrumb-" + pageId}
					>
						{pageId.replace("-", " ")}
					</li>
				))}
			</ol>
		</nav>
	);
};

export default NavigatorBreadcrumbs;
