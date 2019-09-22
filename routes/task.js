// Initializing Modules and Models
const express = require("express");

const List = require("../models/List");

// Intialing Routes
const router = express.Router();

// Routers in action
router.get("/list", (req, res) => {
  res.send("List from the task routes");
});

router.post("/add", (req, res) => {
  const list = new List({
    strA: req.body.strA,
    strB: req.body.strB
  });

  try {
    list.save().then(data => {
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Exporting the router
module.exports = router;
