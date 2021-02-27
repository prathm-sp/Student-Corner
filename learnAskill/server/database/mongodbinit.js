const mongoose = require("mongoose");
require("dotenv").config();

const CONNECTION_URL = process.env.MONGODB_URI;

mongoose.connect(CONNECTION_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

process.on("SIGINT", async () => {
	await mongoose.connection.close();
	process.exit(0);
});

mongoose.connection.on("connected", () => {
	console.log("Mongo has connected succesfully");
});
mongoose.connection.on("reconnected", () => {
	console.log("Mongo has reconnected");
});
mongoose.connection.on("error", (error) => {
	console.log("Mongo connection has an error", error);
	mongoose.disconnect();
});
mongoose.connection.on("disconnected", () => {
	console.log("Mongo connection is disconnected");
});
