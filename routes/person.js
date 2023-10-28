const express = require("express");
const router = express.Router();
const Person = require("../models/person.model");

const personController = require("../controllers/person.controller");

router.get("/", personController.findAll);

router.post("/", personController.createPost);

router.put("/", personController.upDate);

router.delete("/:id", personController.Delete);

router.post("/:id", personController.findgt);

module.exports = router;
