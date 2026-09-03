const express = require("express");
const cors = require("cors");
const leadsRouter = require("./routes/leads");

const app = express();

const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim());

app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "srikara-backend" });
});

app.use("/api/leads", leadsRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

module.exports = app;
