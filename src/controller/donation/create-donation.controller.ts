import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const createDonation = async (req: Request, res: Response) => {
  const {
    amount,
    specialMesssage,
    socialURLOrBuyMeACoffee,
    donorId,
    recipientId,
  } = req.body;
  try {
    const donation = await prisma.donation.create({
      data: {
        amount,
        specialMesssage,
        socialURLOrBuyMeACoffee,
        donorId,
        recipientId,
      },
    });
    console.log("donation:", donation);
    res.status(200).json({ donation });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
