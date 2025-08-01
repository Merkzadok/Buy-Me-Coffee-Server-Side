import express from "express";
import { createUserBankCard } from "../controller/bankCard/create-user-bankCard.controller";

const bankCardRouter = express.Router();

bankCardRouter.post("/create/:userId", createUserBankCard);
bankCardRouter.put("/update/:bankCardId", createUserBankCard);
bankCardRouter.get("/get/:userId", createUserBankCard);

export default bankCardRouter;
