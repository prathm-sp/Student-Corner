const mongoose = require("mongoose");
const Job = require("../models/job.model");

exports.post = async (req, res, next) => {
	try {
		//console.log(req.body);
		//console.log(req.payload.id);
		req.body.recruiter = req.payload.id;
		const job = new Job(req.body);
		const createnewjob = await job.save();

		res.status(200).send(job);
	} catch (err) {
		next(err);
	}
};

exports.get = async (req, res, next) => {
	try {
		const jobs = await Job.find();
		res.status(200).send(jobs);
	} catch (err) {
		next(err);
	}
};

exports.getbyCity = async (req, res, next) => {
	try {
		console.log(req.params.city);

		const jobs = await Job.find({ city: req.params.city });

		res.status(200).send(jobs);
	} catch (err) {
		next(err);
	}
};

exports.getOne = async (req, res, next) => {
	try {
		//	console.log(req.params.jobId);

		const job = await Job.findById(req.params.jobId);

		res.status(200).send(job);
	} catch (err) {
		next(err);
	}
};

exports.putOne = async (req, res, next) => {
	try {
		console.log(req.params.jobId);

		const jobId = req.params.jobId;
		const job = await Job.findById(jobId);
		if (!job) throw res.send(`No job associated with id: ${jobId}`);

		if (job) {
			job.name = req.body.name;
			job.title = req.body.title;
			job.address = req.body.address;
			job.company = req.body.company;
			job.industry = req.body.industry;
			job.type = req.body.type;
			job.function = req.body.function;
			job.city = req.body.city;
			job.description = req.body.description;

			const updatedJob = await job.save();
		}
		res.status(200).send(job);
	} catch (err) {
		next(err);
	}
};

exports.deleteOne = async (req, res, next) => {
	try {
		//	console.log(req.params.jobId);

		const deleteJob = await Job.findByIdAndDelete(req.params.jobId);

		res.status(200).send(`Job with id: ${req.params.jobId} is deleted`);
	} catch (err) {
		next(err);
	}
};
