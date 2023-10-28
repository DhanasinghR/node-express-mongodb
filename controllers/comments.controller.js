const Comments = require("../models/comments.model.js");
const { success, failure, resexception } = require("../config/res.config.js");

const commentsController = {
  commentsFindAll: async (req, res, next) => {
    try {
      //   res.json({ name: "Dhanasingh " });
      const allComments = await Comments.find();
      if (allComments) res.json(success.commentsFindAll(allComments));
      else res.json(failure.commentsFindAll(allComments));
    } catch (e) {
      res.json(resexception.commentsFindAll(e));
    }
  },

  commentsPost: async (req, res, next) => {
    //   res.json({ name: "Thanush" });
    try {
      let newComments = new Comments({
        ...req.body,
        name: req.user ? req.user : req.body.name,
      });
      const doc = await newComments.save();
      //res.json(doc);
      if (doc) res.json(success.commentsPost(doc));
      else res.json(failure.commentsPost(doc));
    } catch (e) {
      res.json(resexception.commentsPost(e));
    }
  },

  commentsPut: async (req, res, next) => {
    //   res.json({ name: "Subash" });
    try {
      const data = await Comments.findByIdAndUpdate(req.params.id, req.body);
      if (data) res.json(success.commentsPut(data));
      else res.json(failure.commentsPut(data));
    } catch (e) {
      res.json(resexception.commentsPut(e));
    }
  },

  commentsDelete: async (req, res, next) => {
    //   res.json({ name: "singh1 delete", id: req.params.id });
    try {
      const data = await Comments.findByIdAndDelete(req.params.id);
      if (data) res.json(success.commentsDelete(data));
      else res.json(failure.commentsDelete(data));
    } catch (e) {
      res.json(resexception.commentsDelete(e));
    }
  },

  commentsGetById: async (req, res, next) => {
    //   res.json({ name: "singh getbyIdcomments", id: req.params.id });
    try {
      const data = await Comments.findById(req.params.id);
      if (data) res.json(success.commentsGetById(data));
      else res.json(failure.commentsGetById(data));
    } catch (e) {
      res.json(resexception.commentsGetById(e));
    }
  },
};

module.exports = commentsController;
