const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const date = require("./date.model");

const educationSchema = new Schema({
	school: {
		type: String,
		required: true,
	},
	degree: {
		type: String,
		required: true,
	},
	field: {
		type: String,
		required: true,
	},
	grade: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	date: {
		type:Date,
		required: true,
		default:Date.now
	},
});

module.exports = mongoose.model("Education", educationSchema);
