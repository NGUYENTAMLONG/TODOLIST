const express = require("express");
const routerJobs = require("./routes/api/jobs");
const mongoose = require("mongoose");
const app = express();
// const bodyParser = require("body-parser");

// BodyParser Middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// cors
const cors = require("cors");
app.use(cors());

// connect to DB
const { MONGO_URL } = require("./config");
mongoose
  .connect(MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.log(err);
  });
// PORT
const PORT = process.env.PORT || 4000;

app.use("/api/jobs", routerJobs);

app.get("/", (req, res) => {
  res.send("Hello!!! This is TODOLIST APP hehe ");
});
app.listen(PORT, (req, res) => {
  console.log(`Server is runing on PORT: ${PORT} ^^`);
});
