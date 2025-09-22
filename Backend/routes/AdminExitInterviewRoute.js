// routes/exitInterviewRoutes.js
const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const exitInterviewController = require("../controllers/ExitInterviewController");

const router = express.Router();

router.get("/exit_responses", authMiddleware, exitInterviewController.getExitResponses);

module.exports = router;
