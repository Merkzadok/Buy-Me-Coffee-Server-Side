import { Response, Request } from "express";
import { prisma } from "../../utils/prisma";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(req.params.id) },
      include: {
        bankCard: true,
      },
    });

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
