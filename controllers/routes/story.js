const express = require("express");
const router = express.Router();
const Story = require("../models/story.model");

const storyController = require("../controllers/story.controller");

router.get("/", storyController.findAll);

router.post("/", storyController.createPost);

router.put("/", storyController.upDate);

router.delete("/:id", storyController.Delete);

module.exports = router;