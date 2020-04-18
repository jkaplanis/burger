const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll(data => {
    const hbObj = {
      burgers: data
    };
    res.render("index", hbObj);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne({ burger_name: req.body.burger_name }, result => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

router.put("/api/burgers/:id/devoured", (req, res) => {
  const condition = { id: req.params.id };
  const update = { devoured: true };

  burger.updateOne(update, condition, result => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
