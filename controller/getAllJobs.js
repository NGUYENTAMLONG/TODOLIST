const Jobs = require("../models/jobs");

const getAllJobs = async (req, res) => {
  try {
    const allJobs = await Jobs.find();
    if (!allJobs) throw Error("Not Found !!! -_-");
    res.status(200).json(allJobs);
    res.send(allJobs);
  } catch (error) {
    res.status(400).json({ msg: `${error}` });
  }
};
module.exports = getAllJobs;
