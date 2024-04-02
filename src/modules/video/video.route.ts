import express from "express";
import videoMiddleware from "./video.middleware";
import videoController from "./video.controller";

const router = express.Router();

router.post(
	"/upload",
	videoMiddleware.upload.single("video"),
	videoController.uploadVideo
);

export default router;
