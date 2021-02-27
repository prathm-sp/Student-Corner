const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saveJobSchema = new Schema({
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
});

module.exports = mongoose.model("SaveJob", saveJobSchema);
