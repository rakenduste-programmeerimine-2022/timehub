const express = require("express")
const loginRoutes = express.Router()
const dbo = require("../db/conn")
const userSchema = require("../db/mongoSchemas")



loginRoutes.route("/login").post(async function (req, res) {
  const dbConnect = dbo.getDb();
  

  const matchUser = {
    userData:{
      username: req.body.username
    }
  }

  console.log("Login Request Recieved")
  console.log(req.body.username)

  dbConnect
    .collection("users").findOne({userData:{
      username: req.body.username
    }}, function(err, result){
      if(err){
        res.status(400)
      }else{
        console.log(result)
      }
    })

    
});

module.exports = loginRoutes