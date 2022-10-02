const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);

app.use(
	cors({
		origin: "http://localhost:8080",
	})
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("Hello world!");
});

app.post("/login", (req, res) => {
	console.log(req.body);
});

server.listen(3000, () => {
	console.log("listening on *:3000");
});
