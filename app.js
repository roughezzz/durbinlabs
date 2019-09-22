// Initializing Packages
const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

// Initializing Routes
const task = require("./routes/task");

// Initializing Express
const app = express();

// Connecting to Mongoose
mongoose.connect(
  "mongodb://localhost:27017/database_task",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

// App in Actions
app.use(bodyParser.json());
app.use("/task", task);

// Listening to Port
app.listen(8383);
