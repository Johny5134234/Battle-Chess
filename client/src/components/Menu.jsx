import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import Button from "./form/Button";
import TextEntry from "./form/TextEntry";
import Title from "./Title";
import Navigator from "./navigation/Navigator";
import NavigatorPage from "./navigation/NavigatorPage";
import { ChessIconType, ColorType } from "../util/Util";
import LogIn from "./form/Login";
import socket from "../api/socket";
import { AppContext } from "./application-state/StateContext";

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
	const appContext = useContext(AppContext);

	function requestHost(e) {
		e.preventDefault();
		const roomId = e.target.childNodes[0].childNodes[0].childNodes[1].value;
		socket.emit("request-host", roomId);
	}

	function requestJoin(e) {
		e.preventDefault();
		const roomId = e.target.childNodes[0].childNodes[0].childNodes[1].value;
		socket.emit("request-join", roomId);
	}

	socket.on("join-game", () => {
		appContext.setMode("game");
	});

	socket.on("host-fail", () => {
		console.log("room id in use!");
	});

	socket.on("join-fail", (inRoom) => {
		console.log(inRoom ? "already in room!" : "no such room exists!");
	});

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
							fillColor={ColorType.BLUE}
							textColor={ColorType.WHITE}
							borderColor={ColorType.BLUE}
						>
							Sign Up
						</Button>
					</div>
				</NavigatorPage>
				<NavigatorPage pageId="play" owner="home">
					<Button>Find Game</Button>
					<Button navTo="join-game">Join Game</Button>
					<Button navTo="host-game">Host Game</Button>
				</NavigatorPage>
				<NavigatorPage pageId="join-game" owner="play">
					<form className={classes.form} onSubmit={requestJoin}>
						<TextEntry label="room id"></TextEntry>
						<Button submit>Join</Button>
					</form>
				</NavigatorPage>
				<NavigatorPage pageId="host-game" owner="play">
					<form className={classes.form} onSubmit={requestHost}>
						<TextEntry label="room id"></TextEntry>
						<Button submit>Host</Button>
					</form>
				</NavigatorPage>
				<NavigatorPage pageId="login" owner="home">
					<LogIn />
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
								fillColor={ColorType.BLUE}
								textColor={ColorType.WHITE}
								borderColor={ColorType.BLUE}
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
