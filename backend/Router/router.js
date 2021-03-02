const express = require("express");
const router = express.Router();

router.get("/findpg", async (req, res) => {
  await Pg.find({ city: req.body })
    .then((pgs) => res.status(200).json(pgs))
    .catch((err) => res.status(404).json({ message: err }));
});

module.exports = router;
