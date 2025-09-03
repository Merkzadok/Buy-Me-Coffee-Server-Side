import express from "express";

import userRouter from "./router/user.router";
import profileRouter from "./router/profile.router";

import donationRouter from "./router/donation.router";

import bankCardRouter from "./router/bankCard.router";
import cors from "cors";

const app = express();
const PORT = 4001;
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/profile", profileRouter);
app.use("/donation", donationRouter);
app.use("/bank-cards", bankCardRouter);

app.get("/hello", async (req, res) => {
  res.status(200).json({ message: "success" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
