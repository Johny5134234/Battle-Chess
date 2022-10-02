import React from "react";
import axios from "axios";
import Menu from "./Menu";

const loginApiRoute = "http://localhost:3000";
export const loginAxiosInstance = axios.create({
	baseURL: "http://localhost:3000/",
});

function App() {
	return (
		<div className="App">
			<Menu></Menu>
		</div>
	);
}

export default App;
