const mongoose = require("mongoose");
const Job = require("../models/job.model");
const Applicant = require("../models/applicant.model");
const Application = require("../models/application.model");
const Save = require("../models/savejob.model");

exports.apply = async (req, res, next) => {
	try {
		//console.log(req.body);
		//console.log(req.payload.id);
		const jobData = await Job.findById(req.params.jobId);
		req.body.recruiterId = jobData.recruiter;
		req.body.applicantId = req.payload.id;
		req.body.jobId = req.params.jobId;
		const application = new Application(req.body);
		const ApplyforJob = await application.save();
		res.status(200).send(ApplyforJob);
	} catch (err) {
		next(err);
	}
};

exports.fetchApplied = async (req, res, next) => {
	try {
		//console.log(req.body);
		console.log(req.payload.id);

		const appliedJobs = await Application.find({ applicantId: req.payload.id });

		res.status(200).send(appliedJobs);
	} catch (err) {
		next(err);
	}
};

exports.save = async (req, res, next) => {
	try {
		//console.log(req.body);
		//console.log(req.payload.id);
		req.body.applicantId = req.payload.id;
		req.body.jobId = req.params.jobId;
		const SaveJob = new Save(req.body);
		const savejob = await SaveJob.save();
		res.status(200).send(savejob);
	} catch (err) {
		next(err);
	}
};
