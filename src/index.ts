import express from "express";

import userRouter from "./router/user.router";
import bankCardRouter from "./router/bankCard.router";

const app = express();
const PORT = 4001;
app.use(express.json());

app.use("/users", userRouter);
app.use("/bank-cards", bankCardRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
