const express = require("express");
const {  addCustomer, getCustomerData } = require("../controller/customerCtrl");
const {
  authMiddleware,
  isAdmin,
  isSuper,
} = require("../middlewares/authMiddleware");

const router = express.Router();
router.post("/add", addCustomer);
router.get("/", getCustomerData);
module.exports = router;
