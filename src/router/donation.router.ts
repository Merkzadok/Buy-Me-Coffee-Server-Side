import express from "express";
import { createDonation } from "../controller/donation/create-donation.controller";
import { getReceived } from "../controller/donation/get-donation-received.controller";
import { getTotalEarnings } from "../controller/donation/get-donation-total-earnings.controller";
import { getSearchDonations } from "../controller/donation/get-search-donations.controller";

const donationRouter = express.Router();

donationRouter.post("/create-donation", createDonation);
donationRouter.get("/received/:userId", getReceived);
donationRouter.get("/total/:userId", getTotalEarnings)
donationRouter.get("/search-donations/:userId", getSearchDonations)

export default donationRouter;