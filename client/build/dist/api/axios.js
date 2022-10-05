import axios from "../../_snowpack/pkg/axios.js";

export default axios.create({
	baseURL: "http://localhost:3000",
});
