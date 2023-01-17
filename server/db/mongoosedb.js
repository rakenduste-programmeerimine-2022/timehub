const mongoose = require("mongoose");
const uri = "mongodb+srv://AdminTest:AdminTest@clustertesthub.3o00obk.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .set("strictQuery", false)
  .connect(uri)
  .then(() => console.log("Database connection established"))
  .catch((e) => console.error(e));

module.exports = mongoose