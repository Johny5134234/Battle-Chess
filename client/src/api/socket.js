import io from "socket.io-client";

const socket = io("http://localhost:4527");

export default socket;
