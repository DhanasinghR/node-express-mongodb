const mongoose = require("mongoose");
const { Schema } = mongoose;

const personSchema = Schema(
  {
    // _id: Schema.Types.ObjectId,
    name: String,
    age: { type: Number, default: 20 },
    stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
    createDate: { type: Date, default: Date.now },
  },
  {
    statics: {
      findAgegt22(i) {
        return this.find({ age: { $gt: i } });
      },
    },
  }
);

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
