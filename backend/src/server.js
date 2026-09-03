require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const express = require("express");
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const cors = require("cors");

app.use(cors());
app.use(express.json());

if (!MONGODB_URI) {
  console.error("MONGODB_URI is not set. Copy .env.example to .env and add your Atlas connection string.");
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`Srikara backend listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
