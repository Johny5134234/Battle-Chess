import React from "react";
import { createUseStyles } from "react-jss";
import TextEntry from "./TextEntry";
import Button from "./Button";
import { ColorType } from "../../util/Util";
import axios from "../../api/axios";

const LOGIN_URL = "/login";

const useStyles = createUseStyles({
	form: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 40,
	},
	row: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		gap: 30,
	},
});

const LogIn = () => {
	const classes = useStyles();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = e.target.childNodes[0].childNodes[0].childNodes[1];
		const password = e.target.childNodes[1].childNodes[0].childNodes[1];

		try {
			const res = await axios.post(
				LOGIN_URL,
				JSON.stringify({
					username: email.value,
					password: password.value,
				}),
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);
			//email.value = "";
			//password.value = "";
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<TextEntry label="email" width="100%"></TextEntry>
			<TextEntry label="password" width="100%" password></TextEntry>
			<div className={classes.row}>
				<Button width="50%" submit>
					Log In
				</Button>
				<Button
					width="50%"
					fillColor={ColorType.BLUE}
					textColor={ColorType.WHITE}
					borderColor={ColorType.BLUE}
					navTo="signup"
				>
					Sign Up
				</Button>
			</div>
		</form>
	);
};

export default LogIn;
