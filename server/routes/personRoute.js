const express = require("express");
const { addPerson, getPersonAata } = require("../controller/personctrl");
const {
  authMiddleware,
  isAdmin,
  isSuper,
} = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/", getPersonAata);
router.post("/add", addPerson);
module.exports = router;
