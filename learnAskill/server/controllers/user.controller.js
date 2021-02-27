const validator = require("validator");
const User = require("./../models/user.models");
const {signaccesstoken } = require("./../helpers/jwt.helpers");

const httpStatus = require("http-status");
const mongoose = require("mongoose");
const Recruiter = require("../models/recruiter.models");
const Applicant = require("../models/applicant.model");

exports.getAll = async (req, res, next) => {
	try {
		// console.log('\n\n\n', req.user.role, '\n\n\n')
		const response = { payLoad: {} };
		const recruiter = await Recruiter.find();
		const applicant = await Applicant.find();
		response.payLoad = { applicant, recruiter };
		res.status(httpStatus.OK);
		res.send(response); 
	} catch (error) {
		next(error);
	}
};

exports.getOne = async (req, res, next) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.userId)) throw new APIError(`Invalid userId`, httpStatus.BAD_REQUEST);
		const response = { payLoad: {} };
		let user = await Applicant.findOne({ id: req.params.userId }).exec();
		if (!user) {
			user = await Recruiter.findOne({ id: req.params.userId }).exec();
			response.payLoad.role = "recruiter";
		} else {
			response.payLoad.role = "applicant";
		}
		response.payLoad.user = user;
		res.status(httpStatus.OK);
		res.send(response);
	} catch (error) {
		next(error);
	}
};

exports.putOne = async (req, res, next) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.userId)) throw new APIError(`Invalid userId`, httpStatus.BAD_REQUEST);
		const userId = req.params.userId;
		const response = { payLoad: {}, message: "" };
		const userAccount = await User.findById(userId).exec();
		if (!userAccount) throw new APIError(`No user associated with id: ${userId}`, httpStatus.NOT_FOUND);
		const role = userAccount.role;
		const user = role === "applicant" ? Applicant : Recruiter;
		let userDetails = await user.findOne({ id: userId }).exec();
		for (const key in req.body) {
			if (user.schema.obj.hasOwnProperty(key) && key !== "id" && key !== "_id") {
				userDetails[key] = req.body[key];
			}
		}
		const updatedUserDetails = await userDetails.save();
		if (updatedUserDetails) {
			response.message = "SUCCESS";
			response.payLoad = updatedUserDetails;
			res.status(httpStatus.OK);
			res.send(response);
		} else {
			throw new APIError(`User with id: ${userId} not updated`, httpStatus.NOT_FOUND);
		}
	} catch (error) {
		next(error);
	}
};

exports.deleteOne = async (req, res, next) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.userId)) throw new APIError(`Invalid userId`, httpStatus.BAD_REQUEST);
		const userId = req.params.userId;
		const response = { payLoad: {}, message: "" };
		const userAccount = await User.findById(userId).exec();
		if (!userAccount) throw new APIError(`No user associated with id: ${userId}`, httpStatus.NOT_FOUND);
		const role = userAccount.role;
		const user = role === "applicant" ? Applicant : Recruiter;
		const deleteAccount = await User.findByIdAndDelete(userId).exec();
		const deleteResult = await user.findOneAndDelete({ id: userId }).exec();
		if (deleteAccount && deleteResult) {
			response.message = "SUCCESS";
			res.status(httpStatus.OK);
			res.send(response);
		} else {
			throw new APIError(`User with id: ${userId} not deleted`, httpStatus.NOT_FOUND);
		}
	} catch (error) {
		next(error);
	}
};
