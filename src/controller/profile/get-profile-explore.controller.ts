import { Response, Request } from "express";
import { prisma } from "../../utils/prisma";

export const getProfileExplore = async(req:Request, res:Response) =>{
    try {
        const users = await prisma.profile.findMany();

        res.status(200).json({users})
    } catch (error) {
        console.log(error);
        
    }
}