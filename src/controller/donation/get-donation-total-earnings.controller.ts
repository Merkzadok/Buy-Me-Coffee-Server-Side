import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const getTotalEarnings = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const donations = await prisma.donation.findMany({
      where: { recipientId: Number(userId) },
    });

    const total = donations.reduce((sum, d) => sum + d.amount, 0);
    res.status(200).json({ total });
  } catch (error) {
    res.status(500).json({error: "Нийт орлогыг тооцоход алдаа гарлаа"})
  }
};
