// routes/authRoutes.js
const express = require("express");
const dotenv = require("dotenv");
const authController = require("../controllers/authController");

dotenv.config();
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
