const asyncHandle = require("express-async-handler");
const Asset = require("../models/assetModel");
const addAsset = asyncHandle(async (req, res) => {
  res.json(req.body);
});

const getAssetAata = asyncHandle(async (req, res) => {
  res.json("data");
});

module.exports = { addAsset, getAssetAata };
