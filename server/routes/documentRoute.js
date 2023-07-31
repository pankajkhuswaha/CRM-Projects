const express = require("express");
const { addDocument, getDocumentAata } = require("../controller/documentctrl");
const {
  authMiddleware,
  isAdmin,
  isSuper,
} = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/", getDocumentAata);
router.post("/add", addDocument);
module.exports = router;
