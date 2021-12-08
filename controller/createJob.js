const Jobs = require("../models/jobs");

const postJob = async function createJob(req, res) {
  const newJob = new Jobs(req.body);
  try {
    const job = await newJob.save();
    if (!job) {
      throw Error("Something went wrong while saving the job !!! =(");
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ message: `${error}` });
  }
};

module.exports = postJob;
// export const createJob = async (req, res) => {
//   const newJob = new Jobs(req.body);
//   try {
//     const job = await newJob.save();
//     if (!job) {
//       throw Error("Something went wrong while saving the job !!! =(");
//     }
//     res.status(200).json(job);
//   } catch (error) {}
// };
