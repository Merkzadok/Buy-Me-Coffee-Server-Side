import { Response, Request } from "express";
import { prisma } from "../../utils/prisma";

export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
