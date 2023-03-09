const express = require("express");
const mongoose = require("mongoose");
const app = express();
const gawsRouter = require("./routers/gaws");
const url = "mongodb://localhost:27017/GawsanDB";

app.use(express.json);
app.use("/api", gawsRouter);

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening port on ${port}...`));
