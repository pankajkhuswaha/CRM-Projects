const express = require("express");
const { addLoan, getLoanAata } = require("../controller/loanctrl");
const {
  authMiddleware,
  isAdmin,
  isSuper,
} = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/", getLoanAata);
router.post("/add", addLoan);
module.exports = router;
