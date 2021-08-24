import express from "express";
import { editUser, remove, see, logout } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(":id", see);
userRouter.get("/logout", logout);
userRouter.get("/edit", editUser);
userRouter.get("/delete", remove);

export default userRouter;