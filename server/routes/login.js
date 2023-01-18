require("dotenv").config()
const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const UserSchema = require("../db/schema");

//Temp way
const mongoose = require("mongoose");

router.use(express.json());

//Currently Operating One
router.post("/loginHashed", async (req, res) => {
  console.log("login request recieved");
  const loginusr = req.body.username;
  const loginpwd = req.body.password;
  console.log(req.body);

  UserSchema.findOne({ username: req.body.username }, async function (err, result) {
    if (result == null) {
        res.json({answer:"failed"})
      return; //Send that user missing orsmth
    }
    if(await bcrypt.compare(loginpwd, result.password)){
        console.log("match")
        const user = { username: result.username, admin: result.admin}
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

      res.json({accessToken:accessToken,  success: true});
      
      console.log(accessToken)
    }else{
        console.log("not match")
        res.json({answer:"failed"})
    }
  });
});


//Testing and stuff...


//See this for creating users
router.post("/loginCreate", async (req, res) => {
  try {
    console.log("login request recieved");
    const loginusr = req.body.username;
    const loginpwd = req.body.password;

    const hashedpw = await bcrypt.hash(loginpwd, 10);
    console.log(hashedpw);
    UserSchema.create({ username: loginusr, password: hashedpw });
    console.log(req.body);
    //Validate
  } catch (e) {
    res.sendStatus(e);
  }
});

module.exports = router;

router.post("/login", (req, res) => {
    console.log("login request recieved");
    const loginusr = req.body.username;
    const loginpwd = req.body.password;
  
    console.log(req.body);
    //Validate
    UserSchema.findOne({ username: req.body.username }, function (err, result) {
      if (!(result == null) && loginpwd == result.password) {
        console.log("userFound and pwd matches");
  
          
      
  
      } else {
        res.json({ answer: "incorrect credentials" });
      }
    });
  });