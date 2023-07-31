const express = require("express");
const {
    bookTestRide,getallbookTestRide 
} = require("../controller/testridectrl");
const { authMiddleware, isAdmin, isSuper } = require("../middlewares/authMiddleware");


const router = express.Router();
router.post("/add", bookTestRide);
router.get("/", getallbookTestRide);
;


module.exports = router;
