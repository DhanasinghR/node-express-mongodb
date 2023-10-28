const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = Schema({
  userName: {
    type: String,
    required: [true, "userName required"],
    unique : true,
    index : true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  dob: {
    type: Date,
    required: false,
  },
});

usersSchema.pre('save', () =>{
  console.log('users added');
})

const user = mongoose.model("users", usersSchema);

module.exports = user;
