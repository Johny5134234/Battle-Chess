import React from "react";
import axios from "axios";
import Menu from "./Menu";
import AppNavigator, { Mode } from "./application-state/StateContext";

function App() {
	return (
		<div className="App">
			<AppNavigator>
				<Mode modeId="menu">
					<Menu></Menu>
				</Mode>
				<Mode modeId="game">
					<h1>CHESS!</h1>
				</Mode>
			</AppNavigator>
		</div>
	);
}

export default App;
