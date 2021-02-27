const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Applicant = require('./applicant.model');
const education = require("./education.model");

const recruterpersonalschema = new Schema({
	recruterid: {
		type: Schema.Types.ObjectId,
		ref: "Recruiter",
	},
	first: {
		type: String,
		required: true,
	},
	last: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	company: {
		type: String,
	},
	profile_image: {
		type: String,
	},
	banner_image: {
		type: String,
	},
});

module.exports = mongoose.model('RecruiterP', recruterpersonalschema);

