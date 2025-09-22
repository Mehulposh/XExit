// controllers/resignationController.js
const resignationService = require("../service/resignationService");

const submitResignation = async (req, res) => {
  if (req.user.role !== "employee") {
    return res.status(403).json({ message: "Access denied" });
  }

  const { lwd } = req.body;

  try {
    const resignation = await resignationService.submitResignation(
      req.user.id,
      lwd
    );
    res.status(200).json({ data: { resignation } });
  } catch (error) {
    res.status(400).json({
      message: "Error submitting resignation",
      error: error.message,
    });
  }
};

const getResignation = async (req, res) => {
  if (req.user.role !== "employee") {
    return res.status(403).json({ message: "Access denied" });
  }

  try {
    const resignation = await resignationService.getEmployeeResignation(
      req.user.id
    );
    res.status(200).json({ data: resignation });
  } catch (error) {
    if (error.message === "No resignation found.") {
      return res.status(404).json({ message: error.message });
    }
    res.status(400).json({
      message: "Error fetching resignation details",
      error: error.message,
    });
  }
};

module.exports = { submitResignation, getResignation };
