// routes/resignationRoutes.js
const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const resignationController = require("../controllers/resignationController");

const router = express.Router();

router.post("/resign", authMiddleware, resignationController.submitResignation);
router.get("/resign", authMiddleware, resignationController.getResignation);

module.exports = router;
