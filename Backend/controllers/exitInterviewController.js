// controllers/exitInterviewController.js
const exitInterviewService = require("../service/exitInerviewService");

const submitExitInterview = async (req, res) => {
  if (req.user.role !== "employee") {
    return res.status(403).json({ message: "Access denied" });
  }

  const { responses } = req.body;

  try {
    const result = await exitInterviewService.submitExitInterview(
      req.user.id,
      responses
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: "Error submitting exit interview",
      error: error.message,
    });
  }
};

module.exports = { submitExitInterview };
