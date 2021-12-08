const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const JobSchema = new Schema(
  {
    jobName: {
      type: String,
      required: true,
    },
    jobDesc: {
      type: String,
      required: false,
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
    jobState: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  { versionKey: false }
);
module.exports = mongoose.model("Jobs", JobSchema);
