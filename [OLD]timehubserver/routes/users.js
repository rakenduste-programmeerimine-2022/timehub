const express = require("express")
const router = express.Router()

router.get("/users",(req,res)=>{
    console.log("Connection to users made")
})

router.post("/users/new",(req,res)=>{
    console.log("Requesting profile data")
    
})

router.get("/users/:id",(req,res)=>{
    console.log("Requesting user @34243j2h4j data")

})



module.exports = router