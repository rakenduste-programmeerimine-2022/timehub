const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  userData:{
    username: String,
    password: String,
    admin: Boolean,
  },profileData:{
    fname: String,
    lname: String,
    contact:{
        phone:String,
        email:String,
    }
  }, workData:{
    position:Number,
    hoursWorked:Number
  }
})

module.exports = mongoose.model("users", userSchema)