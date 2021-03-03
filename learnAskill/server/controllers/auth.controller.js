const Recruiter = require("../models/recruiter.models");
const Applicant = require("../models/applicant.model");
const jwt = require("jsonwebtoken");

const validator = require("validator");
const { signaccesstoken } = require("./../helpers/jwt.helpers");

exports.recruitersignup = async (req, res, next) => {
	try {
		let { email, password, mobile } = req.body;

		if (!email || !password || !mobile) throw new Error("please enter emailid and password");
		if (!validator.isEmail(email) || !validator.isMobilePhone(mobile, "en-IN")) throw new Error("enter a valid email and valid phone number");

		let duplicateemail = await Recruiter.findOne({ email: email });
		let phonenumber = await Recruiter.findOne({ mobile: mobile });

		if (duplicateemail || phonenumber) throw new Error("please enter unique email and phone number");

		let recruiter = await new Recruiter({ email, password, mobile });
		await recruiter.save();
		const token = await signaccesstoken(recruiter.id, recruiter.email, recruiter.mobile, "Recruiter");

		res.status(201).send({ token: token, saveduser: recruiter });
	} catch (error) {
		next(error);
	}
};

exports.recruitersignin = async (req, res, next) => {
	try {
		let { email, password } = req.body;
		if (!email || !password) throw new Error("please enter emailid and password");

		let usersearchbyemail = await Recruiter.findOne({ email: email });
		let usersearchbymobile = await Recruiter.findOne({ mobile: email });
		//user can login by both email and phone number
		if (!usersearchbyemail && !usersearchbymobile) throw new Error("enter valid email password");

		let userexist = usersearchbyemail || usersearchbymobile;
		let result = await userexist.isvalid(password);
		if (!result) throw new Error("enter valid email password");

		const token = await signaccesstoken(userexist.id, userexist.email, userexist.mobile, "Recruiter");

		res.status(200).send({ token: token, user: userexist });
	} catch (error) {
		next(error);
	}
};

exports.applicantsignup = async (req, res, next) => {
	try {
		let { email, password, mobile } = req.body;

		if (!email || !password || !mobile) throw new Error("please enter emailid and password");
		if (!validator.isEmail(email) || !validator.isMobilePhone(mobile, "en-IN")) throw new Error("enter a valid email and valid phone number");

		let duplicateemail = await Applicant.findOne({ email: email });
		let phonenumber = await Applicant.findOne({ mobile: mobile });

		if (duplicateemail || phonenumber) throw new Error("please enter unique email and phone number");

		let recruiter = await new Applicant({ email, password, mobile });
		await recruiter.save();
		const token = await signaccesstoken(recruiter.id, recruiter.email, recruiter.mobile, "Applicant");

		res.status(201).send({ token: token, saveduser: recruiter });
	} catch (error) {
		next(error);
	}
};

exports.applicantsignin = async (req, res, next) => {
	try {
		let { email, password } = req.body;
		console.log(req.body);
		if (!email || !password) throw new Error("please enter emailid and password");

		let usersearchbyemail = await Applicant.findOne({ email: email });
		let usersearchbymobile = await Applicant.findOne({ mobile: email });
		console.log(usersearchbymobile);
		console.log(usersearchbyemail);
		//user can login by both email and phone number
		if (!usersearchbyemail && !usersearchbymobile) throw new Error("user not found");

		let userexist = usersearchbyemail || usersearchbymobile;
		let result = await userexist.isvalid(password);
		if (!result) throw new Error("enter valid email password");

		const token = await signaccesstoken(userexist.id, userexist.email, userexist.mobile, "Applicant");

		res.status(200).json({ token: token, user: userexist });
	} catch (error) {
		next(error);
	}
};

exports.authRoute = async (req, res) => {
	try {
		res.send(req.payload);
	} catch (error) {
		next(error);
	}
};
