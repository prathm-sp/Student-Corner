const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const configcloud = (req, res, next) => {
  cloudinary.config({
    cloud_name: process.env.Cloudname,
    api_key: process.env.Apikey,
    api_secret: process.env.Apisecret,
  });
  next();
};

const uploadtocloud = (file) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file, function (error, image) {
      console.log(error);
      console.log(image);
      const fs = require("fs");
      fs.unlinkSync(file);
      console.log(image);
      if (error) {
        console.log("there is error ");
        reject(new Error("there is error in cloudinary"));
      }
      resolve({ url: image.url, id: image.public_id });
    });
  });
};

module.exports = { configcloud, uploadtocloud };

// const { config, uploader } = require("cloudinary");

// const cloudinaryConfig = (req, res, next) => {
//   config({
//     cloud_name: process.env.Cloudname,
//     api_key: process.env.Apikey,
//     api_secret: process.env.Apisecret,
//   });
//   next();

// };

// module.exports = { cloudinaryConfig, uploader };

// // const cloudinaryConfig = (req, res, next) => {
// // config({
// // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// // api_key: process.env.CLOUDINARY_API_KEY,
// // api_secret: process.env.CLOUDINARY_API_SECRET,
// // });
// // next();
// // }

// exports.uploads = (file) =>{
//   return new Promise(resolve => {
//   cloudinary.uploader.upload(file, (result) =>{
//   resolve({url: result.url, id: result.public_id})
//   })
//   })
//   }
