import { Response, Request } from "express";
import { prisma } from "../../utils/prisma";

export const createProfile = async (req: Request, res: Response) => {
  const {
    name,
    about,
    avatarImage,
    socialMediaURL,
    backgroundImage,
    successMessage,
  } = req.body;

  const { userId } = req.params;


  try {
    console.log("useriD", userId);
    console.log("name:", name);

    const userProfile = await prisma.profile.create({
      data: {
        name,
        about,
        avatarImage,
        socialMediaURL,
        backgroundImage,
        successMessage,
        user: {
            connect:{id: Number(userId)}
        }
      },
    });
    console.log("userProfile:", userProfile)
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};
