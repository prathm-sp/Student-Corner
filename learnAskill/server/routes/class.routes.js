const express = require("express");
const app = express.Router();
const { verifyaccesstoken } = require("./../helpers/jwt.helpers");
const { upload } = require("./../helpers/multer");
const { configcloud, uploadtocloud } = require("./../helpers/cloudinary");
const Class = require("./../models/class.model");
const role = require("./../helpers/role");
//all the classes

app.get("/all", verifyaccesstoken, async (req, res, next) => {
	try {
		const allclasses = await Class.find();
		res.status(200).send({ classes: allclasses });
	} catch (error) {
		next(error);
	}
});
app.post("/apply/:classid", verifyaccesstoken, role.checkRole(role.ROLES.Applicant), async (req, res, next) => {
	try {
		let clas = await Class.findById(req.params.classid);
		if (!clas) throw new Error("enter valid class id");

		const find = await ClassApplication($and[({ classid: req.params.classid }, { applicantid: req.payload.id })]);
		if (!find) {
			const newapplication = new ClassApplication({
				classid: req.params.classid,
				applicantid: req.payload.id,
				recruiterid: clas.classowner,
			});
			res.status(201).send({ status: newapplication.status });
		} else {
			const cancellapplication = await ClassApplication.findOneAndDelete($and[({ classid: req.params.classid }, { applicantid: req.payload.id })]);
			res.status(201).send({ status: "Apply" });
		}
		res.status(201).send();
	} catch (error) {
		next(error);
	}
});

//get all programming class
app.get("/category/:name", verifyaccesstoken, async (req, res, next) => {
	try {
		const getbyactivity = await Class.find({ activites: req.params.name });
		res.status(200).send(getbyactivity);
	} catch (error) {
		next(error);
	}
});
//getting a specific class
app.get("/:id", verifyaccesstoken, async (req, res, next) => {
	try {
		const specificclass = await Class.findById(req.params.id);
		if (!specificclass) res.status(400).send("enter valid id");

		// let query ={$and:[{price:{$gte:lowervalue}},{price:{$lte:uppervalue}}]}
		let query = {
			$and: [{ classid: req.params.id }, { applicantid: req.payload.id }],
		};
		const subscribed = await ClassApplication.findOne(query);

		if (!subscribed) res.status(200).send({ class: specificclass, subscribed: "Apply" });
		else res.status(200).send({ class: specificclass, subscribed: subscribed.status });
	} catch (error) {
		next(error);
	}
});
//getting all the class that the recruiter has made
app.get("/my", verifyaccesstoken, async (req, res, next) => {
	try {
		const myclasses = await Class.find({ classowner: req.payload.id });
		res.status(200).send({ my: myclasses });
	} catch (error) {
		next(error);
	}
});

// creating a class
// app.post('/',verifyaccesstoken,upload.single('image'),configcloud,async(req,res,next)=>{

app.post("/", verifyaccesstoken, role.checkRole(role.ROLES.Recruiter), async (req, res, next) => {
	try {
		// console.log(req.body);
		const { classname, category, address, city, fees, duration, vacancy, firstname, lastname } = req.body;
		console.log(req.payload);
		req.body.classowner = req.payload.id;
		console.log("---------",req.body);
		if (!classname || !category || !address || !city || !fees || !duration || !vacancy || !firstname || !lastname) throw new Error("enter all the details");

		// const path = req.file.path
		// const resulturl = await uploadtocloud(path);
		// req.body.image = resulturl.url;

		const clas = new Class(req.body);
        await  clas.save();
		//console.log(req.body)
		// req.body.image = resulturl.url;
		res.status(201).send({ clas: clas });
	} catch (error) {
		next(error);
	}
});

// app.post("/prat/uppload", upload.single("image"), async (req, res, next) => {
//   try {
//     console.log(req.file);
//     res.send("done");
//   } catch (error) {
//     next(error);
//   }
// });
//upload image
app.post("/:classid/image", verifyaccesstoken, role.checkRole(role.ROLES.Recruiter), upload.single("image"), configcloud, async (req, res, next) => {
	try {
		const clas = await Class.findById(req.params.classid);
		let clas2 = await Class.find({_id: req.params.classid});
		console.log(`----------------------------------------------------------${clas}`);
		console.log(`----------------------------------------------------------${clas2}`);
		if (!clas) throw new Error("enter valid class id");
		if (!req.file) throw new Error("enter image");

		const path = req.file.path;
		const resulturl = await uploadtocloud(path);
		//  req.body.image = resulturl.url;
		clas.image = resulturl.url;

		const clas1 = await clas.save();
		res.status(201).send({ class: clas1 });
	} catch (error) {
		next(error);
	}
});

//deleting a class by id
app.delete("/:id", verifyaccesstoken, async (req, res, next) => {
	try {
		const del = await Class.findByIdAndDelete(req.params.id);
		res.send(del);
	} catch (error) {
		next(error);
	}
});

module.exports = app;
