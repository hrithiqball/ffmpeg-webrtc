import { Request, Response } from "express";
import videoService from "./video.service";

function uploadVideo(req: Request, res: Response) {
	if (!req.file) {
		return res.status(400).send("No video uploaded");
	}

	const { groupId } = req.body;
	videoService.encodeVideo(groupId, req.file.filename, (err) => {
		if (err) {
			return res.status(500).send({ message: "Error encoding video", err });
		}

		res
			.status(200)
			.send({ message: "Video uploaded and encoded successfully" });
	});
}

export default { uploadVideo };
