const express = require("express");
const cors = require("cors");

//get MongoDB driver connection
const dbo = require("./db/conn")
const serverport = 5000;

//Routers-----------------------------------------
//const userRouter = require("./routes/users");
const loginRouter = require("./routes/login");

const app = express();

app.use(express.json());
app.use(cors());
app.use(loginRouter);


//Schemas-----------------------------------------



app.get("/", (req, res) => {
  res.sendStatus(200);
  console.log("Recieved request on /");
});

dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(serverport, () => {
    console.log(`Server is running on port: ${serverport}`);
  });
});