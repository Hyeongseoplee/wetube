import express from "express";
import { showLatestVideos, search } from "../controllers/videosController";
import { join, login } from "../controllers/userController";

const globalRouter =  express.Router();

globalRouter.get("/", showLatestVideos);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);


export default globalRouter;