const express = require("express");
const Pg = require("../Models/pg.model");
const router = express.Router();
const Owner = require("../Models/owner.model");
const url = require('url');

// api to get all the Pg's
router.get("/findPg", async (req, res) => {
  const queryObject = url.parse(req.url,true).query;
  const value = queryObject.city;
  
  await Pg.find({city: value})
    .then((pgs) => res.status(200).json(pgs))
    .catch((err) => res.status(404).json({ message: err }));
});

// api to post a new Pg
router.post("/addPg", (req, res) => {
  try {
    const pg = new Pg({ ...req.body });
    console.log(pg);
    pg.save();
    res.status(200).json({ id: pg._id });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// api to update the info of pg
router.patch("/updatePg/:id", async (req, res) => {
  await Pg.findById(req.params.id)
    .then((pg) => {
      pg.rooms = req.body.rooms;
      pg.contactNumber = req.body.contactNumber;
      pg.price = req.body.price;
      pg.save()
        .then(() => res.status(200).json())
        .catch((err) => res.status(400).json({ message: err }));
    })
    .catch((err) => res.status(404).json({ message: err }));
});

router.get("/getOwnerPg/:id", async (req, res) => {
  await Pg.find({ authorId: req.params.id  })
    .then((pgs) => res.status(200).json(pgs))
    .catch((err) => res.status(404).json({ message: err }));
});

// development purpose only
router.get("/users", async (req, res) => {
  await Owner.find({})
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(404).json({ message: err }));
});

router.delete("/users/:id", async (req, res) => {
  await Owner.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ message: "Deleted" }))
    .catch((err) => res.status(404).json({ message: err }));
});

router.delete("/deletepg/:id", (req, res) => {
  Pg.findByIdAndDelete(req.params.id)
  .then(() => res.status(200).json({message : "Deleted"}))
  .catch((err) => res.status(404).json(err));
});

module.exports = router;
