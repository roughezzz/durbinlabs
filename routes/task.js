// Initializing Modules and Models
const express = require("express");

const List = require("../models/List");

// Intialing Routes
const router = express.Router();

function fun(strA, strB, callback) {
  let temp = "";

  if (strA === strB || strB.length === 0) {
    callback(true);
  } else {
    for (let i = 0; i < strB.length; i++) {
      for (let j = 0; j < strA.length; j++) {
        if (strB[i] === strA[j]) {
          temp += strA[j];
        }
      }
    }

    const result = temp === strB ? true : false;

    callback(result);
  }
  // console.log(temp);
}

// Routers in action
router.get("/list", (req, res) => {
  const lists = List.find({}, (err, lists) => {
    if (err) {
      res.send(err);
    }
    res.json({ lists });
  });
});

router.post("/add", async (req, res, next) => {
  fun(req.body.strA, req.body.strB, function(result) {
    if (!result) {
      return res.status(200).json({ result: false });
    }

    const list = new List({
      strA: req.body.strA,
      strB: req.body.strB
    });
    try {
      list.save().then(data => {
        res.status(200).json({ result: true });
      });
    } catch (err) {
      res.status(500).send(err);
    }
  });
});

// Exporting the router
module.exports = router;
