var multer = require("multer");
//multer.diskStorage() creates a storage space for storing files.
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		console.log("+++++++++++++++++++++++++++++",file)
		 if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
		cb(null, "uploads/");
		}else{
		 cb({message: 'this file is neither a video or image file'}, false)
		 }
	},
	filename: function (req, file, cb) {
		cb(null, `${Date.now()}.jpg`);
	}
});
var upload = multer({ storage: storage });
module.exports = { upload };

// const multer = require('multer')
// const  Datauri =require('datauri');
// const path = require('path')
// const storage = multer.memoryStorage();
// const multerUploads = multer({ storage }).single('image');
// const dUri = new Datauri();
// const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
// module.exports = {multerUploads,dataUri};

// import multer from 'multer';
// import Datauri from 'datauri';
// import path from 'path';
// const storage = multer.memoryStorage();
// const multerUploads = multer({ storage }).single('image');
// const dUri = new Datauri();
// /*
// * @description This function converts the buffer to data url
// * @param {Object} req containing the field object
// * @returns {String} The data url from the string buffer
// */
// const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
// export { multerUploads, dataUri };
