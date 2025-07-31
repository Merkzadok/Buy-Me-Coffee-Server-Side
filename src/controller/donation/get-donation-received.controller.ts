import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const getReceived = async ( req: Request, res: Response) => {
    const { userId } = req.params;
    const donation = await prisma.donation.findUnique({
        where: { id: Number(userId) },
    });
    res.status(200).json({ donation });
}