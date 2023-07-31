const mongoose = require("mongoose");
const testRideShema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    number: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    fathername: {
      type: String,
      required: true,
    },
    mothername: {
      type: String,
      required: true,
    },
    references: {
      type: Array,
      default: [],
    },
    mothername: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    date:{
      type:Date
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Testride", testRideShema);
