import express from "express";
import { createUser } from "../controller/user/create-user.controller";
import { getUsers } from "../controller/user/get-users.controller";
import { getUsersWithProfile } from "../controller/user/get-users-with-profile.controller";
import { UpdateUser } from "../controller/user/update-user.controller";

const userRouter = express.Router();

userRouter.post("/create-user", createUser);
userRouter.get("/get-users", getUsers);
userRouter.get("/get-users-with-profile", getUsersWithProfile);
userRouter.put("/update-user/:id", UpdateUser);

export default userRouter;
