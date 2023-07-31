const express = require("express");
const { addAsset, getAssetAata } = require("../controller/assetctrl");
const {
  authMiddleware,
  isAdmin,
  isSuper,
} = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/", getAssetAata);
router.post("/add", addAsset);
module.exports = router;
