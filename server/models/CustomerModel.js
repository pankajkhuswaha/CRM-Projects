const mongoose = require("mongoose");
const CustomerModel = new mongoose.Schema(
  {
    handleby: {
      type: String,
      require: true,
      default: "admin",
    },
    loanid: {
      type: String,
      require: true,
      unique: true,
    },
    persondetails: {
      type: Array,
    },
    ref1: {
      type: String,
    },
    ref2: {
      type: String,
    },
    loantype: {
      type: Array,
    },
    loanAmount: {
      type: String,
    },
    rateOfInterest: {
      type: String,
    },
    tennuretime: {
      type: String,
    },
    dateOfDisburment: {
      type: String,
    },
    providentfund: {
      type: String,
    },
    documents: {
      type: Array,
    },
    cashinhand: {
      type: String,
    },
    cardetails: {
      type: Array,
    },
    propertydeatils: {
      type: Array,
    },
    date: {
      type: Date,
      default: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("customer", CustomerModel);
