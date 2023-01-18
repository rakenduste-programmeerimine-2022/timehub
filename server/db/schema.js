const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
    admin: { type: Boolean, default: () => false },
    profileData: {
      fname: String,
      lname: String,
      contact: {
        phone: String,
        email: String,
      },
    },
    workData: {
      position: {type:Number,
      default:()=> 0},
      hoursWorked: {type:Number,
      default:()=> 0},
    }
  },
  { collection: "usersNew" }
);

const userDataModel = mongoose.model("usersNew",userDataSchema)

const userListDataSchema = new mongoose.Schema({
  profileData: {
    fname: String,
    lname: String,
    contact: {
      phone: String,
      email: String,
    },
  },
  workData: {
    position: {type:Number,
    default:()=> 0},
    hoursWorked: {type:Number,
    default:()=> 0},
  }
})

const userListDataModel = mongoose.model("usersNew",userListDataSchema)

module.exports = {
  userDataModel:userDataModel,
  userListDataModel:userListDataModel
  
}
