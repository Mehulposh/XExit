// services/exitInterviewService.js
const ExitInterview = require("../model/ExitInterviewModel");

const submitExitInterview = async (employeeId, responses) => {
  const exitInterview = new ExitInterview({
    employeeId,
    responses,
  });
  await exitInterview.save();
  return { message: "Exit interview submitted" };
};

module.exports = { submitExitInterview };
