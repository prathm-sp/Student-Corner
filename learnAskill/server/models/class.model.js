const { Schema, model } = require("mongoose");

const classSchema = Schema({
  classowner: {
    type: Schema.Types.ObjectId,
    ref: "Recruiter",
  },
  image: {
    type: String,
    required: true,
  },
  activites: {
    type: String,
    required: true,
    enum: [
      "Hospital",
      "Technical",
      "Sport",
      "Cenimatics",
      "Cooking",
      "Performance",
      "Programming",
    ],
  },
  category: {
    type: String,
    required: true,
  },
  classtype: {
    type: String,
    required: true,
    enum: ["Fulltime", "Parttime", "Remote"],
  },
  classname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  vacancy: {
    type: Number,
    min: [1,"enter minimum vacancy 1"],
    max: [10,"enter max vacancy of 10"]
  },
  classinformation: {
    type: String,
    required: true,
  },
  classdescription: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
  },
});

module.exports = model("Class", classSchema);
