// services/authService.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");
const { SECRET_KEY, HR_EMAIL, HR_PASSWORD } = process.env;

const registerUser = async (username, password) => {
    console.log('register password',password);
    
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error("Username already exists");
  }

  
  const newUser = new User({
    username,
    password,
    role: "employee",
  });
  await newUser.save();

  return { message: "User registered successfully" };
};

const loginUser = async (username, password) => {
  // Check HR login
  if (username === HR_EMAIL && password === HR_PASSWORD) {
    const token = jwt.sign({ id: "HR", role: "hr" }, SECRET_KEY, {
      expiresIn: "1d",
    });
    return { token };
  }

  // Employee login
  const user = await User.findOne({ username });
  console.log(user);
  
  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await user.comparePassword(password);
  console.log(password);
  
  console.log(isPasswordValid);
  
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ id: user._id, role: "employee" }, SECRET_KEY, {
    expiresIn: "1d",
  });

  return { token };
};

module.exports = { registerUser, loginUser };
