const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { success, failure, resexception } = require("../config/res.config.js");

const userController = {
  findAll: async (req, res, next) => {
    try {
      // res.send("respond with a resource");
      const allUsers = await User.find();
      if (allUsers) res.json(success.findAll(allUsers));
      else res.json(failure.findAll(allUsers));
    } catch (e) {
      res.json(resexception.findAll(e));
    }
  },

  signup: async (req, res, next) => {
    //res.json({ age: "26" });
    try {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(req.body.password, salt);
      req.body.password = hash;
      let newUser = new User(req.body);
      const doc = await newUser.save();
      //res.json(doc);
      if (doc) res.json(success.signup(doc));
      else res.jsonn(failure.signup(doc));
    } catch (e) {
      res.json(resexception.signup(e));
    }
  },

  login: async (req, res, next) => {
    try {
      const data = req.body;
      if (req.body.userName && req.body.password) {
        const userData = await User.findOne({ userName: req.body.userName });
        console.log(req.body);
        console.log(userData);
        var result = bcrypt.compareSync(req.body.password, userData.password);
        console.log(result);
        if (result) {
          // delete userData.password;
          var payload = { name: userData.userName, id: userData._id };
          console.log(payload);
          var token = jwt.sign(payload, "singh");
          console.log(token);
        } else {
          token = null;
        }
        res.json({ user: token });
      }
    } catch (e) {
      res.json({ error: e, message: "exception" });
    }
  },

  upDate: async (req, res, next) => {
    try {
      // res.json({message :"users put something", id:req.params.id, body:req.body});
      const data = await User.findByIdAndUpdate(req.params.id, req.body);
      if (data) res.json(success.upDate(data));
      else res.json(failure.upDate(data));
    } catch (e) {
      res.json(resexception.upDate(e));
    }
  },

  userDelete: async (req, res, next) => {
    try {
      // res.json({ value: "users delete something", id: req.params.id });
      const data = await User.findByIdAndDelete(req.params.id);
      if (data) res.json(success.userDelete(data));
      else res.json(failure.userDelete(data));
    } catch (e) {
      res.json(resexception.userDelete(e));
    }
  },

  userGetId: async (req, res, next) => {
    try {
      // res.json({ valueid: "users getById", id: req.params.id });
      const data = await User.findById(req.params.id);
      if (data) res.json(success.userGetId(data));
      else res.json(failure.userGetId(data));
    } catch (e) {
      res.json(resexception.userGetId(e));
    }
  },
};

module.exports = userController;
