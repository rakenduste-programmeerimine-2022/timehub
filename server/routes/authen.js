const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");
const UserSchema = require("../db/schema");

//Temp way
const mongoose = require("mongoose");

router.use(express.json());

router.post("/login", (req, res) => {
  console.log("login request recieved");
  const loginusr = req.body.username;
  const loginpwd = req.body.password;

  console.log(req.body);
  //Validate
  UserSchema.findOne({ username: req.body.username }, function (err, result) {
    if(!(result==null) && loginpwd == result.password){
        console.log("userFound and pwd matches")
    }
  });

  //UserExists({loginusr})
});

module.exports = router;
