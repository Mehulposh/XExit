// services/exitInterviewService.js
const ExitInterview = require("../model/ExitInterviewModel");

const getExitResponses = async () => {
  return await ExitInterview.find().populate("employeeId", "username");
};

module.exports = { getExitResponses };
