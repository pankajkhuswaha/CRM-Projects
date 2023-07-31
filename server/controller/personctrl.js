const asyncHandle = require("express-async-handler");
const Person = require("../models/personModel");
const addPerson = asyncHandle(async (req, res) => {
  res.json(req.body);
});

const getPersonAata = asyncHandle(async (req, res) => {
  res.json("data");
});

module.exports = { addPerson, getPersonAata };
