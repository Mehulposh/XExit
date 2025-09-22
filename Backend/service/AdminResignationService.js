// services/resignationService.js
const Resignation = require("../model/ResignationModel");

const getAllResignations = async () => {
  return await Resignation.find().populate("employeeId", "username");
};

const updateResignationStatus = async (resignationId, approved, lwd) => {
  const resignation = await Resignation.findById(resignationId);
  if (!resignation) {
    throw new Error("Resignation not found");
  }

  if (approved) {
    resignation.status = "approved";
    resignation.lwd = lwd;
  } else {
    resignation.status = "rejected";
  }

  await resignation.save();
  return { message: "Resignation status updated" };
};

module.exports = { getAllResignations, updateResignationStatus };
