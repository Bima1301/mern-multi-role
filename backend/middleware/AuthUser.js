import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Please login first" });
  }
  const user = await prisma.user.findUnique({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ message: "User not found" });
  req.userId = user.id;
  req.role = user.role;
  next();
};

export const adminOnly = async (req, res, next) => {
  const user = await prisma.user.findUnique({
    where: {
      uuid: req.session.userId,
    },
    include: {
      role: true,
    },
  });
  if (!user) return res.status(404).json({ message: "User not found" });
  if (user.role.name !== "admin")
    return res.status(403).json({ message: "Not authorized" });
  next();
};
