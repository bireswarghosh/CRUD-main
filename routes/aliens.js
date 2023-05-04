const express = require("express");
const router = express.Router();
const Alien = require("../models/alien");

// BACSICALLY GET METHID USE FOR READ MATHOD

//if you use the await method so you use async funcation

router.get("/", async (req, res) => {
  try {
    // HEAR USE FIND -->> IT FIND ALL THE DATA IN SIDE THE COLECTION
    //HEAR find MATHOD IS THE DATABASE MATHOD IS INTERNALLY IS THE PROMMICS
    // SO , HERA TO HANDEL A PROMIDSSES  WE USE THE await keyword
    const aliens = await Alien.find();

    // HERE CONVERTAING THE JSON FORMAT
    res.json(aliens);
  } catch (err) {
    res.send("Error " + err);
  }
});

// shearch through id 
router.get("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    res.json(alien);
  } catch (err) {
    res.send("Error " + err);
  }
});

// use post used for creat 
router.post("/", async (req, res) => {
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send("Error At Post");
  }
});


//use patch  for update through id
router.patch("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    alien.sub = req.body.sub;
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

//use delete  for delete through id
router.delete("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    const a1 = await alien.delete();
    // use either line 68 or line 69
    //    res.json(a1)
    res.send("Data Deleted Successfully");
  } catch (err) {
    res.send("Error " + err);
  }
});

module.exports = router;
