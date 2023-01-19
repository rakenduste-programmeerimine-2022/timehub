const mongoose = require("mongoose");
const uri = "mongodb+srv://AdminTest:AdminTest@clustertesthub.3o00obk.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri)

const db = mongoose.connection
db.on("error", (error) =>(error))


//Remains Unused rn