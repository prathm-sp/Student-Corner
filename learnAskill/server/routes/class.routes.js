const express = require("express");
const app = express.Router();
const { verifyaccesstoken } = require("./../helpers/jwt.helpers");
const { upload } = require("./../helpers/multer");
const { configcloud, uploadtocloud } = require("./../helpers/cloudinary");
const Class = require("./../models/class.model");
const ClassApplication = require("./../models/classapplication.model");
const role = require("./../helpers/role");
//all the classes

app.get("/all", verifyaccesstoken, async (req, res, next) => {
	try {
		const allclasses = await Class.find();
		res.status(200).send({ classes: allclasses }).populate("classowner",["email","mobile"]);;
	} catch (error) {
		next(error);
	}
});
 //apply route
app.post("/apply/:classid", verifyaccesstoken, role.checkRole(role.ROLES.Applicant), async (req, res, next) => {
	try {
		let clas = await Class.findById(req.params.classid);
		if (!clas) throw new Error("enter valid class id");
       
        // const query ={$and:[{classid:req.params.classid },{ applicantid:req.payload.id}]}
		// const find = await ClassApplication.find($and[({ classid: req.params.classid }, { applicantid: req.payload.id })]);
        // const find = await ClassApplication.find(query);

         const find = await ClassApplication.findOne({classid:req.params.classid,applicantid:req.payload.id});
        // console.log("find---",find)   
        // if (!find) {
		// 	console.log("inside if");

		// let query = {
		// 	$and:[{ classid: req.params.id }, { applicantid: req.payload.id }],
		// };

		// const find = await ClassApplication.findOne(query);
		if (!find) {
			console.log("inside if");
			console.log(find);
			const newapplication = new ClassApplication({
				classid: req.params.classid,
				applicantid: req.payload.id,
				recruiterid: clas.classowner
			});
				await newapplication.save();
			res.status(201).send({message:"inside if application created", subscribed: newapplication.status });
		} else {


			console.log("inside else");
			console.log(find);
			 let query = {
					$and:[{ classid: req.params.id }, { applicantid: req.payload.id }],
				};
			 const cancellapplication = await ClassApplication.findOneAndDelete({ classid: req.params.classid , applicantid: req.payload.id });
			//  const cancellapplication = await ClassApplication.findOneAndDelete(query);
			res.status(201).send({message:"inside else application destroyed", status: "Apply" });
		}
	} catch (error) {
		next(error);
	}
});
// app.post(
//   "/apply/:classid",
//   verifyaccesstoken,
//   role.checkRole(role.ROLES.Applicant),
//   async (req, res, next) => {
//     try {
//       let clas = await Class.findById(req.params.classid);
//       if (!clas) throw new Error("enter valid class id");

//       // const query ={$and:[{classid:req.params.classid },{ applicantid:req.payload.id}]}
//       // const find = await ClassApplication.find($and[({ classid: req.params.classid }, { applicantid: req.payload.id })]);
//       // const find = await ClassApplication.find(query);

//       const find = await ClassApplication.findOne({
//         classid: req.params.classid,
//         applicantid: req.payload.id,
//       });
//       // console.log("find---",find)
//       // if (!find) {
//       // 	console.log("inside if");

//       // let query = {
//       // 	$and:[{ classid: req.params.id }, { applicantid: req.payload.id }],
//       // };

//       // const find = await ClassApplication.findOne(query);
//       if (!find) {
//         console.log("inside if");
//         console.log(find);
//         const newapplication = new ClassApplication({
//           classid: req.params.classid,
//           applicantid: req.payload.id,
//           recruiterid: clas.classowner,
//         });
//         await newapplication.save();
//         res.status(201).send({
//           message: "inside if application created",
//           subscribed: newapplication.status,
//         });
//       } else {
//         console.log("inside else");
//         console.log(find);
//         let query = {
//           $and: [{ classid: req.params.id }, { applicantid: req.payload.id }],
//         };
//         const cancellapplication = await ClassApplication.findOneAndDelete({
//           classid: req.params.classid,
//           applicantid: req.payload.id,
//         });
//         //  const cancellapplication = await ClassApplication.findOneAndDelete(query);
//         res.status(201).send({
//           message: "inside else application destroyed",
//           status: "Apply",
//         });
//       }
//     } catch (error) {
//       next(error);
//     }
//   }
// );

//get all programming class
app.get("/category/:name",  async (req, res, next) => {
	try {
		const getbyactivity = await Class.find({ activities: req.params.name }).populate("classowner",["email","mobile"]);
		res.status(200).send({getbyactivity});
	} catch (error) {
		next(error);
	}
});
//getting a specific class
app.get("/:id", verifyaccesstoken, async (req, res, next) => {
  try {
    const specificclass = await Class.findById(req.params.id);
    if (!specificclass) res.status(400).send("enter valid id");
    let query = {
      $and: [{ classid: req.params.id }, { applicantid: req.payload.id }],
    };
    // let query ={$and:[{price:{$gte:lowervalue}},{price:{$lte:uppervalue}}]}

    const subscribed = await ClassApplication.findOne(query);

    if (!subscribed)
      res.status(200).send({ class: specificclass, subscribed: "Apply" });
    else
      res
        .status(200)
        .send({ class: specificclass, subscribed: subscribed.status });
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
		console.log(req.body);
		const { classname, category, address, city, fees, duration, vacancy, firstname, lastname,activities,classtype } = req.body;
		console.log(req.payload);
		req.body.classowner = req.payload.id;
		console.log("---------", req.body);
		if (!classname || !category || !address || !city || !fees || !duration || !vacancy || !firstname || !lastname||!activities||!classtype) throw new Error("enter all the details");

		// const path = req.file.path
		// const resulturl = await uploadtocloud(path);
		// req.body.image = resulturl.url;

		const clas = new Class(req.body)
		await clas.save();
		//console.log(req.body)
		// req.body.image = resulturl.url;
		res.status(201).send({clas: clas});
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

app.post("/:classid/image", verifyaccesstoken,role.checkRole(role.ROLES.Recruiter), upload.single("image"), configcloud, async (req, res, next) => {
	try {
		const clas = await Class.findById(req.params.classid);
		// let clas2 = await Class.find({ _id: req.params.classid });
		// console.log(`----------------------------------------------------------${clas}`);
		// console.log(`----------------------------------------------------------${clas2}`);
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

//route to get all the student list who had applied

app.get('/student/list',verifyaccesstoken,role.checkRole(role.ROLES.Recruiter),async (req, res, next)=>{

	try {
		const query = {
			$and:[{ recruiterid: req.payload.id},{status:"Applied"}]
		}
		const application = await  ClassApplication.find(query);

		res.status(200).send({application:application});
		
	} catch (error) {
		next(error);
	}
});
// to accept student request to join the class
app.get("/accepted/:applicationid",verifyaccesstoken,role.checkRole(role.ROLES.Recruiter),async(req, res, next)=>{

	try {
	const findid = await ClassApplication.findByIdAndUpdate(req.params.applicationid,{status:"Confirmed"});
		console.log("find id",findid)
	if(!findid)  throw new Error("enter valid application id");
	res.status(200).send({id:findid})

	

		
	} catch (error) {
		next(error);
	}
});

app.get("/rejected/:applicationid",verifyaccesstoken,role.checkRole(role.ROLES.Recruiter),async(req, res, next)=>{

	try {
		const findbyid = await ClassApplication.findById(req.params.applicationid);
		if(!findbyid) throw new Error("enter valid application id")
	const findid = await ClassApplication.findByIdAndUpdate(req.params.applicationid,{status:"Rejected"});
		console.log("find id",findid)
	res.status(200).send({id:findid})

	

		
	} catch (error) {
		next(error);
	}
});

module.exports = app;
