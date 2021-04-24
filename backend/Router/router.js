const express = require("express");
const Pg = require("../Models/pg.model");
const router = express.Router();

// api to get all the Pg's
router.get("/findPg", async (req, res) => {
  await Pg.find({ city: req.body })
    .then((pgs) => res.status(200).json(pgs))
    .catch((err) => res.status(404).json({ message: err }));
});

// api to post a new Pg 
router.post("/addPg", (req, res) => {
  try{
    const pg = new Pg({...req.body});
    pg.save();
    res.status(200).json({id : pg._id});
  }catch(err){
    res.status(500).json({message : err});
  }
});

// api to update the info of pg 
router.patch("updatePg/:id", (req, res) =>{
  Pg.findById(req.params.id)
  .then((pg) => {
    pg.rooms = req.body.rooms;
    pg.save()
    .then(() => res.status(200).json())
    .catch((err) => res.status(400).json({message : err}));
  })
  .catch((err) => res.status(404).json({message : err}));
});

module.exports = router;
