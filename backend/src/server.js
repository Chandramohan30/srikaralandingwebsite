require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 5000;
const MONGODB_URI = "mongodb+srv://chankannan30_db_user:chan30%40dec@cluster0.ax74v02.mongodb.net/srikara?appName=Cluster0"

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
