const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema(
	{
		recruiter: {
			type: Schema.Types.ObjectId,
			ref: "Recruiter",
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		company: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		industry: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		function: {
			type: String,
			required: true,
		},
		skills: {
			type: [String],
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Job", jobSchema);
