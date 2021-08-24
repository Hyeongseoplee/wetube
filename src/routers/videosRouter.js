import express from "express";
import { 
    watch, 
    deleteVideo, 
    getEdit, 
    postEdit,
    getUpload,
    postUpload
} from "../controllers/videosController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch); // 이미 videio 라우터 안에 있기때문에 /videos 생략 가능
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;