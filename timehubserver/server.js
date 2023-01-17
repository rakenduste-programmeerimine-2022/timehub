const express = require("express");
const cors = require("cors");
const serverport = 5000;

const UserSchema = require("./routes/mongoSchemas");

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://AdminTest:AdminTest@clustertesthub.3o00obk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("ClusterTestHub").collection("users");
  console.log("Connected to Mongo");

  client.close();
});

//const userRouter = require("./routes/users");
const loginRouter = require("./routes/login");

const app = express();
app.use(express.json());
app.use(cors());

app.use(loginRouter);

app.get("/", (req, res) => {
  res.sendStatus(200);
  console.log("Recieved request on /");
});

app.listen(serverport, () => {
  console.log("Server up");
});
