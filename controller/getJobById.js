const Jobs = require("../models/jobs");

const getJob = async (req, res) => {
  try {
    const job = await Jobs.findById(req.params.id);
    if (!job)
      throw Error("Something went wrong while getting the job by id !!! =(");
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ message: `${error}` });
  }
};
module.exports = getJob;
