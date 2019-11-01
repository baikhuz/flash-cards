const express = require('express')
const router = express.Router()
const validate = require('validate.js')
const db = require('../models')

const config = require('../config/config')
const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')
const uuid = require('uuid/v1')

router.post('/', async (req, res) => {
  console.log(req.body)
  const constraints = {
    first_name: {
      presence: true,
      length: { minimum: 1, maximum: 50 }
    },
    last_name: {
      presence: true,
      length: { maximum: 50 }
    },
    username: {
      presence: true,
      length: { minimum: 5, maximum: 20 }
    },
    password: {
      presence: true,
      length: { minimum: 5, maximum: 20 }
    },
    email: {
      presence: true,
      email: true
    }
  }
  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const username = req.body.username
  const password = req.body.password
  const email = req.body.email

  const validation = validate(
    { first_name, last_name, username, password, email },
    constraints
  )

  const newUuid = uuid()

  let user = { id: newUuid, first_name, last_name, username, password, email }

  // use findOne to check if the user exists in the db

  if (validation) res.status(400).json({ error: validation })
  else {
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)

    await db.Users.create(user).then(function() {
      res.status(200).json(user)
    })
  }
})

module.exports = router
