const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema(
	{
		jobId: {
			type: Schema.Types.ObjectId,
			ref: "Job",
			required: true,
		},
		applicantId: {
			type: Schema.Types.ObjectId,
			ref: "Applicant",
			required: true,
		},
		recruiterId: {
			type: Schema.Types.ObjectId,
			ref: "Recruiter",
			required: true,
		},
		first: {
			type: String,
			required: true,
		},
		last: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		resume: {
			type: String,
			required: true,
		},
		cover_letter: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Application", applicationSchema);