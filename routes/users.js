const express = require("express");
const router = express.Router();
const User = require("../models/user.model.js");

const userController = require("../controllers/user.controller.js");

/* GET users listing. */
router.get("/", userController.findAll);

router.post("/", userController.signup);

router.put("/:id", userController.upDate);

router.delete("/:id", userController.userDelete);

router.get("/:id", userController.userGetId);

router.post("/login", userController.login);

module.exports = router;