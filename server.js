require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");

const app = express();
app.use(express.json());
app.use(cors());

//Routes
app.use("/users", userRouter);

//Listen Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

//mongodb config
const URI = process.env.MONGODB_URL;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
