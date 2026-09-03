const express = require("express");
const Lead = require("../models/Lead");

const router = express.Router();

// POST /api/leads  -> create a new demo-booking / enquiry lead
router.post("/", async (req, res) => {
  try {
    const { name, phone, email, program, message, source } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: "Name and phone are required." });
    }

    const lead = await Lead.create({ name, phone, email, program, message, source });
    return res.status(201).json({ success: true, lead });
  } catch (err) {
    console.error("Error creating lead:", err.message);
    return res.status(500).json({ error: "Could not save your enquiry. Please try again." });
  }
});

// GET /api/leads -> list leads (simple, no auth — intended for local/admin use only)
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).limit(200);
    return res.json({ count: leads.length, leads });
  } catch (err) {
    console.error("Error fetching leads:", err.message);
    return res.status(500).json({ error: "Could not fetch leads." });
  }
});

module.exports = router;
