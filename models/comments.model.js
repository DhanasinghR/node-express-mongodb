const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = Schema({
  postId: {
    type: Number,
    required: [true, "postId is required"],
  },
  id: {
    type: Number,
    required: [true, "id is required"],
  },
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "mail is required"],
  },
  body: {
    type: String,
    required: [true, "body is required"],
  },
});

const comments = mongoose.model("comments", commentsSchema);

module.exports = comments;