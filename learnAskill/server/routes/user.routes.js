const express = require("express");
const router = express.Router();

const { verifyaccesstoken } = require("./../helpers/jwt.helpers");

const usersController = require("../controllers/user.controller");
const validator = require("express-validation");
const { update } = require("../validations/user.validation");
const { userId } = require("../validations/common.validation");

router.get("/", verifyaccesstoken, usersController.getAll);
router.get("/:userId", verifyaccesstoken, usersController.getOne);
router.put("/:userId", verifyaccesstoken, usersController.putOne);
router.delete("/:userId", verifyaccesstoken, usersController.deleteOne);

module.exports = router;
