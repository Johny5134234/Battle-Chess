const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const init = require("./game/game-socket");

const app = express();
const server = http.createServer(app);
init();

app.use(
	cors({
		origin: "http://localhost:8080",
		credentials: true,
	})
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login", (req, res) => {
	console.log(req.body);
});

server.listen(3000, () => {
	console.log("listening on *:3000");
});
