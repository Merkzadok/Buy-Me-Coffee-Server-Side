import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import {secret } from "../controller/user/sign-in.controller"
 type DecodedUser = {
    userId: string;
    email: string;
    role: string;
 }

 export type GetUserAuthInfoRequest = Request & {
    user?: DecodedUser
 }

 export const authenticateToken = (
    req: GetUserAuthInfoRequest,
    res: Response,
    next: NextFunction
 ) => {
    const authHeader = req.headers["authorization"] as string
    const token = authHeader && authHeader.split(" ")[1]

    if(token == null) {
        res.sendStatus(401)
        return
    }

    try {
        const decoded = verify( token, secret) as DecodedUser

        req.user = decoded
        next()
        return
    } catch (error) {
        res.status(401)
        
    }
 }