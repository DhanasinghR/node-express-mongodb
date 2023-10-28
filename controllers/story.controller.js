const Story = require("../models/story.model");
const { success, failure, resexception } = require("../config/res.config");

const storyController = {
  findAll: async (req, res, next) => {
    try {
      const allStory = await Story.find().populate('fans').exec();
      if (allStory) res.json(success.findAll(allStory));
      else res.json(failure.findAll(allStory));
    } catch (e) {
      res.json(resexception.findAll(e));
    }
  },

  createPost: async (req, res, next) => {
    try {
      let newStory = new Story(req.body);
      const doc = await newStory.save();
      if (doc) res.json(success.createPost(doc));
      else res.json(failure.createPost(doc));
    } catch (e) {
      res.json(resexception.createPost(e));
    }
  },

  upDate: async (req, res, next) => {
    try {
      const data = await Story.findByIdAndUpdate(req.params.id, req.body);
      if (data) res.json(success.upDate(data));
      else res.json(failure.upDate(data));
    } catch (e) {
      res.json(resexception.upDate(e));
    }
  },

  Delete: async (req, res, next) => {
    try {
      const data = await Story.findByIdAndDelete(req.params.id);
      if (data) res.json(success.Delete(data));
      else res.json(failure.Delete(data));
    } catch (e) {
      res.json(resexception.Delete(e));
    }
  },
};

module.exports = storyController;
