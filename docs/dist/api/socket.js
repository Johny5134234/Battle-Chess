import io from "../../snowpack/pkg/socket.io-client.js";

const socket = io("http://localhost:4527");

export default socket;
