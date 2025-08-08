import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const getTotalEarnings = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { from, to } = req.query;

  try {
    const whereClause: any = {
      AND: [
        {
          createdAt: {
            gte: from === "undefined" ? undefined : new Date(from as string),
          },
        },
        {
          createdAt: {
            lte: to === "undefined" ? undefined : new Date(to as string),
          },
        },
      ],
      recipientId: Number(userId),
    };

    const donations = await prisma.donation.findMany({
      where: whereClause,
    });

    const total = donations.reduce((sum, d) => sum + d.amount, 0);
    res.status(200).json({ total });
  } catch (error) {
    res.status(500).json({ error: "Нийт орлогыг тооцоход алдаа гарлаа" });
  }
};
