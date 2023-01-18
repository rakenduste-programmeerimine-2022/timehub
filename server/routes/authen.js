const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");
const bcrypt = require("bcrypt");

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
    if (!(result == null) && loginpwd == result.password) {
      console.log("userFound and pwd matches");
      res.json({ answer: "success", admin: result.admin });
    } else {
      res.json({ answer: "incorrect credentials" });
    }
  });
});

router.post("/loginHashed", async (req, res) => {
  console.log("login request recieved");
  const loginusr = req.body.username;
  const loginpwd = req.body.password;
  console.log(req.body);

  UserSchema.findOne({ username: req.body.username }, async function (err, result) {
    if (result == null) {
        console.log("no user")
      return; //Send that user missing orsmth
    }
    if(await bcrypt.compare(loginpwd, result.password)){
        console.log("match")
    }else{
        console.log("not match")
    }
  });
});

async function comparePws(pwd, hpwd) {
  try {
    return await bcrypt.compare(pwd, hpwd);
  } catch {
    return e;
  }
}

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
