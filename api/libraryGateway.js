const express = require('express')
const router = express.Router()
const validate = require('validate.js')
const db = require('../models')
const uuid = require('uuid/v1')


router.post("/", (req, res) => {
  console.log(req.body)
  const constraints = {
    library_name: {
      presence: true,
      length: {minimum: 1, maximum: 100}
    },
    library_description: {
      presence: true,
      length: {minimum: 1, maximum: 100}
    }
  }
  const library_name = req.body.library_name
  const library_description = req.body.library_description

  const validation = validate({library_name, library_description}, constraints)

  if (validation) res.status(400).json({error: validation})

  else {
    
     db.Libraries.create({
        library_id: uuid(),
        library_name,
        library_description
      }).then(function() {
          res.status(200).json({library_name, library_description})
      });
    
    
    }
})

module.exports = router