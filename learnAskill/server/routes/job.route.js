const express = require("express");
const router = express.Router();
const { verifyaccesstoken } = require("./../helpers/jwt.helpers");
const jobsController = require("../controllers/jobs.controller");
const applicationController = require("../controllers/application.controller");

router.get("/applied", verifyaccesstoken, applicationController.fetchApplied);
router.get("/", verifyaccesstoken, jobsController.get);
router.post("/", verifyaccesstoken, jobsController.post);
router.get("/:city", verifyaccesstoken, jobsController.getbyCity);
router.get("/:jobId", verifyaccesstoken, jobsController.getOne);
router.put("/:jobId", verifyaccesstoken, jobsController.putOne);
router.delete("/:jobId", verifyaccesstoken, jobsController.deleteOne);
router.post("/:jobId/apply", verifyaccesstoken, applicationController.apply);
router.post("/:jobId/save", verifyaccesstoken, applicationController.save);

/* router.get('/:jobId/details', verifyaccesstoken, applicationController.getApplicationDetails)
//router.post('/:jobId/unsave', verifyaccesstoken, applicationController.unsave)

 */

module.exports = router;
