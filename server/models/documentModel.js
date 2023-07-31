const mongoose = require("mongoose");
const DocModel = new mongoose.Schema(
  {
    kyc: {
      type: Array,
    },
    financiald: {
      type: Array,
    },
    other: {
      type: Array,
    },
    date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("docs", DocModel);
