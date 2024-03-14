const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");

//express app
const app = express();
app.use(express.json());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
//config dotenv
dotenv.config();
// const env = process.env;

//set port number
const PORT = 5000;

app.use(express.static("public"))
app.use(cors());
//mongoose
const mongoose = require("mongoose");


//mongoose uri
const MONGOOSE_URI = `mongodb+srv://plchandanacgr:chandana123@cluster0.bpp8jpb.mongodb.net/myposdb?retryWrites=true&w=majority&appName=Cluster0`;

//routes
const rootRoute = require("./routes/rootRoutes");
const userRoute = require("./routes/userRoute")


//app use------------
app.use(rootRoute);
app.use("/user", userRoute);


mongoose.connect(MONGOOSE_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));