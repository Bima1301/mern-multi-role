import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAboutSection = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Please login first" });
  }
  const user = await prisma.user.findUnique({
    where: {
      uuid: req.session.userId,
    },
  });
  try {
    const response = await prisma.about.findFirst({
      where: {
        userId: user.id,
      },
      select: {
        id: true,
        story: true,
        biodata: {
          select: {
            id: true,
            age: true,
            gender: true,
            phone: true,
            address: true,
            recidence: true,
            email: true,
          },
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createAboutSection = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Please login first" });
  }
  console.log("req.body", req.body);
  const { story, biodata } = req.body;
  if (!story || !biodata) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  try {
    const response = await prisma.about.create({
      data: {
        story,
        biodata: {
          create: {
            age: biodata.age,
          },
        },
      },
    });
  } catch (error) {}
};
