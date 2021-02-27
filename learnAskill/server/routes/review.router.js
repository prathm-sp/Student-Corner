const express = require("express");
const router = express.Router();
const Vendor = require("../models/recruiter.models");

router.post("/:id", async (req, res) => {
	const vendor = await Vendor.findById(req.params.id);
	if (vendor) {
		const review = {
			name: req.body.name,
			rating: Number(req.body.rating),
			comment: req.body.comment,
		};
		vendor.reviews.push(review);
		vendor.numReviews = vendor.reviews.length;
		vendor.rating = vendor.reviews.reduce((a, c) => c.rating + a, 0) / vendor.reviews.length;
		const updatedvendor = await vendor.save();
		res.status(201).send({
			data: updatedvendor.reviews[updatedvendor.reviews.length - 1],
			message: "Review saved successfully.",
		});
	} else {
		res.status(404).send({ message: "vendor Not Found" });
	}
});

module.exports = router;
