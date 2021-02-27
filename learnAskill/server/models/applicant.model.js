const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require("bcryptjs");

const applicantSchema = new Schema(
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

// applicantSchema.method({
//   transform () {
//     const transformed = {}
//     const fields = ['id', 'name', 'address', 'experience', 'education', 'skills', 'summary', 'resume', 'profile_image', 'banner_image']
//     fields.forEach((field) => {
//       transformed[field] = this[field]
//     })
//     return transformed
//   },
//   identityTransform () {
//     const transformed = {}
//     const fields = ['id', 'name', 'profile_image']
//     fields.forEach((field) => {
//       transformed[field] = this[field]
//     })
//     return transformed
//   }
// })

applicantSchema.pre("save", async function (next) {
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
applicantSchema.methods.isvalid = async function (password) {
	try {
		return await bcrypt.compare(password, this.password); //returns boolean
	} catch (error) {
		next(error);
	}
	return 0;
};

module.exports = mongoose.model("Applicant", applicantSchema);
