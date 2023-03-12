const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
app.use(bodyParser.json());
app.use(cors());

//Middleware
app.use(express.json());

//Import Routes
const gawsRouter = require("./routers/gaws");

//Route Middlewares
app.use("/api/person", gawsRouter);

const MONGODB_URI = "mongodb://localhost:27017/GawsanDB";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

app.listen(3000, () => console.log("Server Up and running"));
