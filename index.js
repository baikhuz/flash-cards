const express = require('express')
const userGateway = require('./api/userGateway')

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use('/user', userGateway)


app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err: {}

  res.status(err.status || 500)
})

const db = require('./models')


//connect to database adn listen on port
db.sequelize.sync()
  .then( () => {
    app.listen(8080, () => {
      console.log('Connected to port 8080!')
    })
  }).catch(err => {
    console.log(err)
  })

