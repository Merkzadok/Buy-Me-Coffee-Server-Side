import { Response, Request } from "express";
import { prisma } from "../../utils/prisma";

export const getUserProfile = async (req: Request, res: Response) => {
  const { username } = req.params;

  try {
    const profile = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    console.log("prfile :", profile);

    res.status(200).json({ profile });
  } catch (error) {
    console.log(error);
  }
};
