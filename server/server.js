const checkIfLoggedIn = require('./Middleware/checkIfLoggedIn');

require("dotenv").config();
const ctrl = require("./controller.js");
const bodyParser = require("body-parser");
const express = require("express"),
  app = express(),
  port = 3002;
session = require("express-session");
massive = require("massive");

const { CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
  console.log("database connection established");
  app.set("db", db);
});

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.post("/register", ctrl.registerUser);

app.post("/auth/login", ctrl.loginUser);

app.get('/checkIfLoggedIn', checkIfLoggedIn)

app.get("/getProperties", ctrl.getProperties);

app.delete("/deleteProperty/:id", ctrl.deleteProperty);

app.post("/logout", ctrl.logout);

app.post("/addProperty", ctrl.addProperty);

app.listen(port, () => console.log(`creeping on port ${port}`));
