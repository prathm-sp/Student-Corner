const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { verifyaccesstoken } = require("../helpers/jwt.helpers");
// const auth = require('../../middlewares/authorization')

router.post("/signup/recruiter", authController.recruitersignup); // validate and register //done
router.post("/signin/recruiter", authController.recruitersignin); // login //done
router.post("/signup/applicant", authController.applicantsignup); //done
router.post("/signin/applicant", authController.applicantsignin);
router.get("/verifyAccessToken", verifyaccesstoken, authController.authRoute);

module.exports = router;
