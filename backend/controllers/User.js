import User from "../models/UserModel.js";
import argon2 from "argon2";

export const getUser = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ["uuid", "name", "email", "role", "createdAt", "updatedAt"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: { uuid: req.params.id },
      attributes: ["uuid", "name", "email", "role", "createdAt", "updatedAt"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createUser = async (req, res) => {
  const { name, email, password, confPassword, role } = req.body;
  if (password !== confPassword) {
    res.status(400).json({ message: "Password not match" });
  }
  const hashPassword = await argon2.hash(password);
  try {
    await User.create({
      name: name,
      email: email,
      password: hashPassword,
      role: role,
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const updateUser = async (req, res) => {
  const user = await User.findOne({ where: { uuid: req.params.id } });
  if (!user) res.status(404).json({ message: "User not found" });
  const { name, email, password, confPassword, role } = req.body;
  if (password !== confPassword)
    res.status(400).json({ message: "Password not match" });
  let hashPassword = "";

  if (password === "" || password === null) {
    hashPassword = user.password;
  } else {
    hashPassword = await argon2.hash(password);
  }
  try {
    await User.update(
      {
        name: name,
        email: email,
        password: hashPassword,
        role: role,
      },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );
    res.status(200).json({ message: "Update successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  const user = await User.findOne({ where: { uuid: req.params.id } });
  if (!user) res.status(404).json({ message: "User not found" });
  try {
    await User.destroy({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json({ message: "Delete successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
