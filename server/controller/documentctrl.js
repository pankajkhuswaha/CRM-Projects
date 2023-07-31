const asyncHandle = require("express-async-handler");
const Document = require("../models/documentModel");
const addDocument = asyncHandle(async (req, res) => {
  res.json(req.body);
});

const getDocumentAata = asyncHandle(async (req, res) => {
  res.json("data");
});

module.exports = { addDocument, getDocumentAata };
