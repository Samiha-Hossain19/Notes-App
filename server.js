require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//postman config
app.get("/", (req, res) => {
  res.json("Welcome to Samiha's Notes App");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

//mongodb config
