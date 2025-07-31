import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const getTotalEarnings = async ( req: Request, res: Response) => {
    const { userId } = req.params;
    const donation = await prisma.donation.findUnique({
        where: { id: Number(userId) },
    });
    console.log("dd",donation);
    
    // const total = donation.reduce((sum, d) => sum + d.amount, 0);
    res.status(200).json({  });
}