import express from "express";
import { createUserBankCard } from "../controller/bankCard/create-user-bankCard.controller";
import { UpdateBankCard } from "../controller/bankCard/update-bankCard.controller";
import { getUserBankCard } from "../controller/bankCard/get-user-bankCard.controller";

const bankCardRouter = express.Router();

bankCardRouter.post("/create/:userId", createUserBankCard);
bankCardRouter.put("/update/:bankCardId", UpdateBankCard);
bankCardRouter.get("/get/:userId", getUserBankCard);

export default bankCardRouter;
  