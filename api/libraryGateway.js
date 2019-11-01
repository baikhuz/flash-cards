const express = require("express");
const router = express.Router();
const validate = require("validate.js");
const db = require("../models");
const config = require("../config/config");

//JWT SECRET  = config.jwt

router.post("/", (req, res) => {
  console.log(req.body);
  const constraints = {
    library_name: {
      presence: true,
      length: { minimum: 1, maximum: 100 }
    },
    library_description: {
      presence: true,
      length: { minimum: 1, maximum: 100 }
    }
  };
  const library_name = req.body.library_name;
  const library_description = req.body.library_description;
  const user_id = req.body.user_id;

  const validation = validate(
    { library_name, library_description },
    constraints
  );

  if (validation) res.status(400).json({ error: validation });
  else {
    db.Libraries.create({ library_name, library_description, UserId: user_id })
      .then(() => {
        res.status(200).json({ library_name, library_description });
      })
      .catch(err => {
        console.log("Error " + err);
        res.status(400).send("Error: Could not add library");
      });
  }
});

module.exports = router;
