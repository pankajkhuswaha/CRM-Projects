const asyncHandle = require("express-async-handler");
const Loan = require("../models/loanModel");
const addLoan = asyncHandle(async (req, res) => {
  res.json(req.body);
});

const getLoanAata = asyncHandle(async (req, res) => {
  res.json("data");
});

module.exports = { addLoan, getLoanAata };
