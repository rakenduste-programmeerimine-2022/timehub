const express = require("express")
const router = express.Router()
const controller = require("../controllers/controllers")

router.post("/login",(req,res)=>{
    console.log("login request recieved")
    
    let usr =req.body.username;
    let pwd =req.body.password;

    console.log(usr)
    console.log(pwd)
})

module.exports = router