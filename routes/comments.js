const express = require("express");
const router = express.Router();
const Comments = require("../models/comments.model.js");

const commentsController = require("../controllers/comments.controller.js");

router.get("/", commentsController.commentsFindAll);

router.post("/", commentsController.commentsPost);

router.put("/:id", commentsController.commentsPut);

router.delete("/:id", commentsController.commentsDelete);

router.get("/:id", commentsController.commentsGetById);

module.exports = router;