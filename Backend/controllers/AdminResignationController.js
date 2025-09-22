// controllers/resignationController.js
const resignationService = require("../service/AdminResignationService");

const getResignations = async (req, res) => {
  if (req.user.role !== "hr") {
    return res.status(403).json({ message: "Access denied" });
  }

  try {
    const resignations = await resignationService.getAllResignations();
    res.status(200).json({ data: resignations });
  } catch (error) {
    res.status(400).json({
      message: "Error fetching resignations",
      error: error.message,
    });
  }
};

const concludeResignation = async (req, res) => {
  if (req.user.role !== "hr") {
    return res.status(403).json({ message: "Access denied" });
  }

  const { resignationId, approved, lwd } = req.body;

  try {
    const result = await resignationService.updateResignationStatus(
      resignationId,
      approved,
      lwd
    );
    res.status(200).json(result);
  } catch (error) {
    if (error.message === "Resignation not found") {
      return res.status(404).json({ message: error.message });
    }
    res.status(400).json({
      message: "Error updating resignation",
      error: error.message,
    });
  }
};

module.exports = { getResignations, concludeResignation };
