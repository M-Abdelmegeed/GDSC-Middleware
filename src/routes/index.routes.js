const express = require("express");
const generateOTP = require("../controllers/generateOTP");
const registerUser = require("../controllers/registerUser");
const router = express.Router();
router.post("/generateOTP", generateOTP);
router.post("/registerUser", registerUser);

module.exports = router;
