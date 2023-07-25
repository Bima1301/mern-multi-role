import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getHomeSection = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Please login first" });
  }
  const user = await prisma.user.findUnique({
    where: {
      uuid: req.session.userId,
    },
  });
  try {
    const response = await prisma.home.findFirst({
      where: {
        userId: user.id,
      },
      select: {
        id: true,
        displayName: true,
        description: true,
        contact: true,
        headline: {
          select: {
            id: true,
            headline: true,
          },
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createHomeSection = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Please login first" });
  }
  const { displayName, description, headline, contact } = req.body;
  if (!displayName || !description || !headline || !contact) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  try {
    const response = await prisma.home.create({
      data: {
        displayName,
        description,
        contact,
        headline: {
          create: headline.map((item) => {
            return {
              headline: item,
            };
          }),
        },
        user: {
          connect: {
            uuid: req.session.userId,
          },
        },
      },
    });
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateHomeSection = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Please login first" });
  }
  const { id, displayName, description, headline, contact } = req.body;
  if (!displayName || !description || !headline || !contact) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  const headlineData = Object.values(headline).map((item) => {
    if (item.id) {
      delete item.id;
    }
    return item;
  });
  try {
    const response = await prisma.home.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        displayName,
        description,
        contact,
        headline: {
          deleteMany: {},
          create: headlineData,
        },
      },
    });
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
