const express = require('express')
const router = express.Router()
const validate = require('validate.js')

router.post("/", (req, res) => {
  console.log(req.body)
  const constraints = {
    first_name: {
      presence: true,
      length: {maximum: 50}
    },
    last_name: {
      presence: true,
      length: {maximum: 50}
    },
    username: {
      presence: true,
      length: {minimum: 5, maximum: 20}
    },
    password: {
      presence: true,
      length: {minimum: 5, maximum: 20}
    },
    email: {
      presence: true,
      email: true
    },
  }
  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const username = req.body.username
  const password = req.body.password
  const email = req.body.email

  const validation = validate({first_name, last_name, username, password, email}, constraints)

  if (validation) res.status(400).json({error: validation})
  else res.status(400).json({first_name, last_name, username, password, email})
})

module.exports = router