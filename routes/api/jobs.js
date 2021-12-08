const express = require("express");
const router = express.Router();

// const Jobs = require("../../models/jobs");
// @routes GET api/jobs
// desc get all jobs
const getAllJobs = require("../../controller/getAllJobs");
router.get("/", getAllJobs);
// @routes POST jobs
// desc post all jobs

// router.post("/", async (req, res) => {
//   const newJob = new Jobs(req.body);
//   try {
//     const job = await newJob.save();
//     if (!job) {
//       throw Error("Something went wrong while saving the job !!! =(");
//     }
//     res.status(200).json(job);
//   } catch (error) {
// res.status(400).json({message:`${error}`})
// }
// });
const createJob = require("../../controller/createJob");
router.post("/", createJob);

// @routes GET api/jobs
// desc get jobs by id
// router.get("/:id", async (req, res) => {
//   try {
//     const job = await Jobs.findById(req.params.id);
//     if (!job)
//       throw Error("Something went wrong while getting the job by id !!! =(");
//     res.status(200).json(job);
//   } catch (error) {
//     res.status(400).json({ message: `${error}` });
//   }
// });
const getJobById = require("../../controller/getJobById");
router.get("/:id", getJobById);

// @routes DELETE api/jobs
// desc DELETE  jobs by id

// router.delete("/:id", async (req, res) => {
//   try {
//     const jobDelete = await Jobs.findByIdAndDelete(req.params.id);
//     if (!jobDelete) {
//       throw Error("Not Found (job) !!!");
//     }
//     res.status(200).json({ message: "Delete successful !!! " });
//   } catch (error) {
//     res.status(400).json({ message: `${error}` });
//   }
// });

const deleteJob = require("../../controller/deleteJob");
router.delete("/:id", deleteJob);
// @routes UPDATE api/jobs
// desc UPDATE  jobs by id

// router.put("/:id", async (req, res) => {
//   try {
//     const jobUpdate = await Jobs.findByIdAndUpdate(req.params.id, req.body);
//     if (!jobUpdate) {
//       throw Error("Not Found job to Update -_-");
//     }
//     res.status(200).json({ message: "Update successful !!!" });
//   } catch (error) {
//     res.status(400).json({ message: `${error}` });
//   }
// });
const updateJob = require("../../controller/updateJob");
router.put("/:id", updateJob);
module.exports = router;
