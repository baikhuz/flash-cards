const express = require("express");
const router = express.Router();
const validate = require("validate.js");
const db = require("../models");
const config = require("../config/config");

//JWT SECRET  = config.jwt

router.post("/", (req, res) => {
  console.log(req.body);
  const constraints = {
    card_question: {
      presence: true,
      length: { minimum: 1, maximum: 100 }
    },
    card_answer: {
      presence: true,
      length: { minimum: 1, maximum: 100 }
    }
  };
  const card_question = req.body.card_question;
  const card_answer = req.body.card_answer;
  const SetId = req.body.set_id;

  const validation = validate({ card_question, card_answer }, constraints);

  if (validation) res.status(400).json({ error: validation });
  else {
    db.Cards.create({ card_question, card_answer, SetId })
      .then(() => {
        res.status(200).json({ card_question, card_answer });
      })
      .catch(err => {
        console.log("Error " + err);
        res.status(400).send("Error: Could not add card");
      });
  }
});

module.exports = router;
