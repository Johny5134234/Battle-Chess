import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	navPage: {
		marginTop: 25,
		position: "absolute",
		top: 0,
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: 40,
	},
});

const defaultProps = {
	owner: "none",
};

const NavigatorPage = (props) => {
	//const [tabIndex, setTabIndex] = useState(0);
	const classes = useStyles();
	//function handleTabControl(event) {}

	return (
		<div className={classes.navPage} ref={props.refN}>
			{props.children}
		</div>
	);
};

NavigatorPage.defaultProps = defaultProps;
export default NavigatorPage;
