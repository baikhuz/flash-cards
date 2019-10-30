const express = require("express");
const router = express.Router();
const validate = require("validate.js");
const db = require("../models");

router.post("/", (req, res) => {
  console.log(req.body);
  const constraints = {
    set_name: {
      presence: true,
      length: { minimum: 1, maximum: 100 }
    },
    set_description: {
      presence: true,
      length: { minimum: 1, maximum: 100 }
    }
  };
  const set_name = req.body.set_name;
  const set_description = req.body.set_description;
  const LibraryId = req.body.library_id;

  const validation = validate({ set_name, set_description }, constraints);

  if (validation) res.status(400).json({ error: validation });
  else {
    db.Sets.create({ set_name, set_description, LibraryId })
      .then(() => {
        res.status(200).json({ set_name, set_description });
      })
      .catch(err => {
        console.log("Error " + err);
        res.status(400).send("Error: Could not add set");
      });
  }
});

module.exports = router;
