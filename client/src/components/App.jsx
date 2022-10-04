import React from "react";
import axios from "axios";
import Menu from "./Menu";
import AppNavigator, { Mode } from "./application-state/StateContext";
import Board from "./game/Board";

function App() {
	return (
		<div className="App">
			<AppNavigator>
				<Mode modeId="menu">
					<Menu></Menu>
				</Mode>
				<Mode modeId="game">
					<Board></Board>
				</Mode>
			</AppNavigator>
		</div>
	);
}

export default App;
