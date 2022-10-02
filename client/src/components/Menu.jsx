import React from "react";
import { createUseStyles } from "react-jss";
import Button from "./form/Button";
import TextEntry from "./form/TextEntry";
import Title from "./Title";
import { loginAxiosInstance } from "./App";
import Navigator from "./navigation/Navigator";
import NavigatorPage from "./navigation/NavigatorPage";
import { ChessIconType, ColorType } from "../util/Util";

const useStyles = createUseStyles({
	menu: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		width: "80vw",
		maxWidth: 600,
		margin: "auto",
		marginTop: 30,
		"& > :nth-child(1)": {
			marginTop: 0,
			marginBottom: 60,
		},
	},
	row: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		gap: 30,
	},
	form: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 40,
	},
});

const Menu = () => {
	const classes = useStyles();

	function handleSubmitLogin(e) {
		e.preventDefault();
		let form = e.target;
		loginAxiosInstance.post("/login", {
			email: form.childNodes[0].childNodes[0].childNodes[1].value,
			password: form.childNodes[1].childNodes[0].childNodes[1].value,
		});
	}

	return (
		<div className={classes.menu}>
			<Title>BATTLE CHESS</Title>
			<Navigator breadcrumbs>
				<NavigatorPage pageId="home">
					<Button navTo="play">Play Game</Button>
					<div className={classes.row}>
						<Button navTo="login" width="45%">
							Log In
						</Button>
						<Button
							navTo="signup"
							width="45%"
							primaryColor={ColorType.BLUE}
							secondaryColor={ColorType.WHITE}
						>
							Sign Up
						</Button>
					</div>
				</NavigatorPage>
				<NavigatorPage pageId="host" owner="play">
					<Button>Host Now</Button>
				</NavigatorPage>
				<NavigatorPage pageId="play" owner="home">
					<Button toggable>Find Game</Button>
					<Button navTo="join-game">Join Game</Button>
					<Button navTo="host">Host Game</Button>
				</NavigatorPage>
				<NavigatorPage pageId="join-game" owner="play"></NavigatorPage>
				<NavigatorPage pageId="login" owner="home">
					<form className={classes.form} onSubmit={handleSubmitLogin}>
						<TextEntry label="email" width="100%"></TextEntry>
						<TextEntry
							label="password"
							width="100%"
							password
						></TextEntry>
						<div className={classes.row}>
							<Button width="50%">Log In</Button>
							<Button
								width="50%"
								primaryColor={ColorType.BLUE}
								secondaryColor={ColorType.WHITE}
								navTo="signup"
							>
								Sign Up
							</Button>
						</div>
					</form>
				</NavigatorPage>
				<NavigatorPage pageId="signup" owner="home">
					<form className={classes.form}>
						<div className={classes.row}>
							<TextEntry
								width="50%"
								label="first name"
							></TextEntry>
							<TextEntry
								width="50%"
								label="last name"
							></TextEntry>
						</div>
						<TextEntry label="email"></TextEntry>
						<TextEntry label="password" password></TextEntry>
						<div className={classes.row}>
							<Button width="50%" navTo="login">
								Log In
							</Button>
							<Button
								width="50%"
								primaryColor={ColorType.BLUE}
								secondaryColor={ColorType.WHITE}
							>
								Sign Up
							</Button>
						</div>
					</form>
				</NavigatorPage>
			</Navigator>
		</div>
	);
};

export default Menu;
