const Person = require("../models/person.model");
const { success, failure, resexception } = require("../config/res.config");

const personController = {
  findAll: async (req, res, next) => {
    try {
      const allPerson = await Person.find();
      if (allPerson) res.json(success.findAll(allPerson));
      else res.json(failure.findAll(allPerson));
    } catch (e) {
      res.json(resexception.findAll(e));
    }
  },

  createPost: async (req, res, next) => {
    try {
      let newPerson = new Person(req.body);
      const doc = await newPerson.save();
      if (doc) res.json(success.createPost(doc));
      else res.json(failure.createPost(doc));
    } catch (e) {
      res.json(resexception.createPost(e));
    }
  },

  upDate: async (req, res, next) => {
    try {
      const data = await Person.findByIdAndUpdate(req.params.id, req.body);
      if (data) res.json(success.upDate(data));
      else res.json(failure.upDate(data));
    } catch (e) {
      res.json(resexception.upDate(e));
    }
  },

  Delete: async (req, res, next) => {
    try {
      const data = await Person.findByIdAndDelete(req.params.id);
      if (data) res.json(success.Delete(data));
      else res.json(failure.Delete(data));
    } catch (e) {
      res.json(resexception.Delete(e));
    }
  },

  findgt: async (req, res, next) => {
    const data = await Person.findAgegt22(req.params.id);
    res.json({data})
  },
};

module.exports = personController;
