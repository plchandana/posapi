const express = require("express");
const dotenv = require("dotenv");

//express app
const app = express();
app.use(express.json());

//config dotenv
dotenv.config();
// const env = process.env;

//set port number
const PORT = 3000;

app.use(express.static("public"))

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