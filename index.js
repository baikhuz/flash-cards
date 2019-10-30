const express = require("express");

//importing the routes
const userGateway = require("./api/userGateway");
const libraryGateway = require("./api/libraryGateway");
const setGateway = require("./api/setGateway");
const cardGateway = require("./api/cardGateway");

const app = express();

//Using express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Setting request routes
app.use("/user", userGateway);
app.use("/library", libraryGateway);
app.use("/set", setGateway);
app.use("/card", cardGateway);

//import database
const db = require("./models");

//connect to database and listen on port
db.sequelize
  .sync()
  .then(() => {
    app.listen(8080, () => {
      console.log("Connected to port 8080!");
    });
  })
  .catch(err => {
    console.log(err);
  });
