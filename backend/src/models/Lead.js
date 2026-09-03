const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: 100,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      maxlength: 20,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      maxlength: 150,
    },
    program: {
      // Which brochure/combo the visitor is interested in
      type: String,
      enum: [
        "IGNITE",
        "ASCEND",
        "FRONTEND_STARTER",
        "FRONTEND_PRO",
        "FULL_STACK_AI",
        "NOT_SURE",
      ],
      default: "NOT_SURE",
    },
    message: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    source: {
      // which page/section the enquiry came from
      type: String,
      default: "landing-page",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);
