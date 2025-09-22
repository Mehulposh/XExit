// routes/resignationRoutes.js
const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const resignationController = require("../controllers/AdminResignationController");

const router = express.Router();

router.get("/resignations", authMiddleware, resignationController.getResignations);
router.put("/conclude_resignation", authMiddleware, resignationController.concludeResignation);

module.exports = router;
