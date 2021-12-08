const Jobs = require("../models/jobs");

const deleteJob = async (req, res) => {
  try {
    const jobDelete = await Jobs.findByIdAndDelete(req.params.id);
    if (!jobDelete) {
      throw Error("Not Found (job) !!!");
    }
    res.status(200).json({ message: "Delete successful !!! " });
  } catch (error) {
    res.status(400).json({ message: `${error}` });
  }
};

module.exports = deleteJob;
