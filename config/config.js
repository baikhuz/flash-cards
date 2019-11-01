require('dotenv').config()

const username = process.env.NAME
const password = process.env.PASSWORD
const database = process.env.DATABASE
const host = process.env.HOST
const port = process.env.PORT
const node_env = process.env.NODE_ENV
const jwt = process.env.JWT_SECRET

const config = {
  dev: {
    db: {
      username,
      password,
      database,
      host,
      port
    },
    jwt
  },
  test: {},
  prod: {}
}

module.exports = config[node_env]
