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
      fname: { type: String, required: true },
      lname: { type: String, required: true },
      contact: {
        phone: { type: String, required: true },
        email: { type: String, required: true },
      },
    },
    workData: {
      position: {type:Number,
      default:()=> 0},
      hoursWorked: {type:Number,
      default:()=> 0},
    },
  },
  { collection: "usersNew" }
)

module.exports = mongoose.model("usersNew", userDataSchema);
