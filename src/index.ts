import express, { Request, Response } from "express";
import { prisma } from "./utils/prisma";
import userRouter from "./router/user.router";

const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
