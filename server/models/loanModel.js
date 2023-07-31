const mongoose = require("mongoose");
const LoanSchema = new mongoose.Schema(
  {
    persondetails: {
      type: Array,
      require: true,
    },
    loandetails: {
      type: Array,
      required: true,
      unique: true,
    },
    assetdetail: {
      type: Array,
      required: true,
      unique: true,
    },
    document: {
      type: Array,
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

module.exports = mongoose.model("Loan", LoanSchema);
