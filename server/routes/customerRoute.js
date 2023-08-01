const express = require("express");
const {  addCustomer, getCustomerData } = require("../controller/customerCtrl");
const {
  authMiddleware,
  isAdmin,
  isSuper,
} = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/", getCustomerData);
router.post("/add", addCustomer);
module.exports = router;
