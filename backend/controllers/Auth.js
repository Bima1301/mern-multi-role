import argon2 from "argon2";
import { PrismaClient } from "@prisma/client";
import passport from "../config/Pasport.js";
const prisma = new PrismaClient();

// Fungsi untuk penanganan masuk menggunakan Google
export const loginWithGoogle = (req, res, next) => {
  passport.authenticate("google", (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: "Authentication failed." });
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      // Di sini sesi pengguna telah disimpan, Anda dapat memberikan respon yang sesuai, misalnya:
      req.session.userId = user.uuid;
      next();
    });
  })(req, res, next);
};

export const Login = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });
  if (!user) return res.status(404).json({ message: "User not found" });
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) return res.status(400).json({ message: "Incorrect password" });

  req.session.userId = user.uuid;
  const uuid = user.uuid;
  const name = user.name;
  const email = user.email;
  const role = user.role;

  res.status(200).json({
    uuid,
    name,
    email,
    role,
  });
};

export const Register = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  if (password !== confPassword) {
    res.status(400).json({ message: "Password not match" });
  }
  const hashPassword = await argon2.hash(password);
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
        roleId: 2,
      },
    });
    res.status(201).json({ message: "Register successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Please login first" });
  }
  const user = await prisma.user.findUnique({
    where: {
      uuid: req.session.userId,
    },
    select: {
      name: true,
      email: true,
      role: {
        select: {
          name: true,
        },
      },
    },
  });
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json({
    status: 200,
    message: "Success",
    data: user,
  });
};

export const Logout = async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    res.status(200).json({ message: "Logout successfully" });
  });
};
