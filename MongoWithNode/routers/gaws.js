const express = require("express");
const { MongoError } = require("mongodb");
const router = express.Router();
const Person = require("../model/person");

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    //res.json(data);
    res.status(200).json(data);
  } catch (err) {
    res.send("Error : " + err);
  }
});
router.post("/create", async (req, res) => {
  const person = new Person({
    name: req.body.name,
    tech: req.body.tech,
    designation: req.body.designation,
  });
  try {
    const p1 = await person.save();
    res.json(p1);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occurred");
  }
});

module.exports = router;
