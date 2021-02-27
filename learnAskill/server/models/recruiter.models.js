const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const recruiterSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			match: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
		},
		password: {
			type: String,
			required: true,
			minLength: 5,
			maxlength: 128,
		},
		mobile: {
			type: String,
			trim: true,
			unique: true,
		},
	},
	{
		timestamps: true,
	}
);

recruiterSchema.pre("save", async function (next) {
	try {
		if (this.isModified("password")) {
			//this is compulsary
			console.log("save function triggred");
			const salt = await bcrypt.genSalt(10);
			const hashedpassword = await bcrypt.hash(this.password, salt);
			this.password = hashedpassword;
		}

		next();
	} catch (error) {
		next(error);
	}
});
//this function has to run manually by calling it
recruiterSchema.methods.isvalid = async function (password) {
	try {
		return await bcrypt.compare(password, this.password); //returns boolean
	} catch (error) {
		next(error);
	}
	return 0;
};

module.exports = mongoose.model("Recruiter", recruiterSchema);
