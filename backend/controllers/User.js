import argon2 from "argon2";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getUser = async (req, res) => {
  const { page, size } = req.query;
  const currentPage = page ? +page : 1;
  const currentSize = size ? +size : 10;
  const offset = (currentPage - 1) * currentSize;
  const totalPages = Math.ceil((await prisma.user.count()) / currentSize);

  try {
    const response = await prisma.user.findMany({
      skip: offset,
      take: currentSize,
      select: {
        uuid: true,
        name: true,
        email: true,
        role: true,
      },
      orderBy: {
        id: "asc",
      },
    });
    const meta = {
      currentPage: currentPage,
      currentSize: currentSize,
      totalItems: response.length,
      totalPages: totalPages,
    };
    res.status(200).json({ user: response, meta: meta });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getRole = async (req, res) => {
  try {
    const response = await prisma.role.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        id: "asc",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getUserById = async (req, res) => {
  try {
    const response = await prisma.user.findUnique({
      where: {
        uuid: req.params.id,
      },
      select: {
        uuid: true,
        name: true,
        email: true,
        role: true,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createUser = async (req, res) => {
  const { name, email, password, roleId } = req.body;
  const hashPassword = await argon2.hash(password);
  try {
    await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashPassword,
        roleId: parseInt(roleId),
      },
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const updateUser = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      uuid: req.params.id,
    },
  });
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
    await prisma.user.update({
      where: {
        uuid: req.params.id,
      },
      data: {
        name: name,
        email: email,
        password: hashPassword,
        roleId: parseInt(role),
      },
    });
    res.status(200).json({ message: "Update successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      uuid: req.params.id,
    },
  });
  if (!user) res.status(404).json({ message: "User not found" });
  try {
    await prisma.user.delete({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json({ message: "Delete successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
