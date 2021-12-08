const Jobs = require("../models/jobs");
const updateJob = async (req, res) => {
  try {
    const jobUpdate = await Jobs.findByIdAndUpdate(req.params.id, req.body);
    if (!jobUpdate) {
      throw Error("Not Found job to Update -_-");
    }
    res.status(200).json({ message: "Update successful !!!" });
  } catch (error) {
    res.status(400).json({ message: `${error}` });
  }
};
module.exports = updateJob;
