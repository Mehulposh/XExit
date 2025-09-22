// services/resignationService.js
const Resignation = require("../model/ResignationModel");

const submitResignation = async (employeeId, lwd) => {
  const resignation = new Resignation({
    employeeId,
    lwd,
  });
  await resignation.save();
  return resignation;
};

const getEmployeeResignation = async (employeeId) => {
  const resignation = await Resignation.findOne({ employeeId });
  if (!resignation) {
    throw new Error("No resignation found.");
  }
  return resignation;
};

module.exports = { submitResignation, getEmployeeResignation };
 