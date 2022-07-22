const express = require("express");

const Flat = require("../models/flat.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let flat = await Flat.create(req.body);
    console.log("post data", { flat });
    return res.status(201).send({ flat });
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let flat = await Flat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send({ flat });
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let flat = await Flat.findById(req.params.id)
      //   .populate("residents")
      .lean()
      .exec();

    return res.status(201).send(flat);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});
router.get("/", async (req, res) => {
  try {
    let flat = await Flat.find().lean().exec();
    // populate("flat")
    return res.status(201).send(flat);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let flat = await Flat.findOneAndDelete({ id: req.params.id });
    res.status(200).send(flat);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
