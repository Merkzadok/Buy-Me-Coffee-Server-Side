import express, { Request, Response } from "express";
import { prisma } from "./utils/prisma";
import userRouter from "./router/user.router";
import profileRouter from "./router/profile.router";

const app = express();
const PORT = 4001;
app.use(express.json());

app.use("/users", userRouter);
app.use("/profile", profileRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
