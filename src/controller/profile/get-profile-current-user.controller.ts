import { Response, Request } from "express";

export const getCurrentProfile = (req: Request, res: Response) => {
  try {
    const authHeaderUser = req.headers.authorization || "";

    if (!authHeaderUser || !authHeaderUser.startsWith("Bearer ")) {
      res.status(400).json({ success: false });
      return;
    }

    const userIdFromHeaders = authHeaderUser.split(" ")[1];
    console.log("userIdFromHeaders", userIdFromHeaders);
    res.status(200).json({ success: true});
  } catch (error) {
    console.log(error);
  }
};
