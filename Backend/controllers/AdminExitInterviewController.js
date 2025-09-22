// controllers/exitInterviewController.js
const exitInterviewService = require("../service/AdminExitInterviewService");

const getExitResponses = async (req, res) => {
  if (req.user.role !== "hr") {
    return res.status(403).json({ message: "Access denied" });
  }

  try {
    const responses = await exitInterviewService.getExitResponses();
    res.status(200).json({ data: responses });
  } catch (error) {
    res.status(400).json({
      message: "Error fetching exit interviews",
      error: error.message,
    });
  }
};

module.exports = { getExitResponses };
