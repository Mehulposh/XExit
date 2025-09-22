// routes/exitInterviewRoutes.js
const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const exitInterviewController = require("../controllers/exitInterviewController");

const router = express.Router();

router.post("/responses", authMiddleware, exitInterviewController.submitExitInterview);

module.exports = router;
