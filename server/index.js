const express = require("express")
const morgan = require("morgan")
const cors = require("cors");
const mongoose = require("mongoose")
const app = express()
const PORT = 8080

require("dotenv").config()


//Routers-----------------------------------------
const userInfo = require("./routes/userInfo.js");
const loginRouter = require("./routes/authen.js");

app.use(morgan("dev"))
app.use(userInfo)
app.use(loginRouter)
app.use(cors({
    origin:"*"
}));


const uri = "mongodb+srv://AdminTest:AdminTest@clustertesthub.3o00obk.mongodb.net/?retryWrites=true&w=majority"
//dot env refusing to work.

mongoose
  .set("strictQuery", false)
  .connect(uri)
  .then(() => console.log('Database connection established'))
  .catch((e) => console.error(e))



app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.post("/",(req,res)=>{
    res.send("Hello Post World")
})


app.listen(PORT, ()=>{
    console.log('Running on port 8080}')
})