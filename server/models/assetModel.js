const mongoose = require("mongoose");
const AssestSchema = new mongoose.Schema(
  {
    pf: {
      type: String,
      require: true,
    },
    cashinhand: {
      type: String,
    },
    property: {
      type: Array,
    },
    car: {
      type: Array,
    },
    date:{
      type:Date
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("asset", AssestSchema);
