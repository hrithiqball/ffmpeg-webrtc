import multer from "multer";
import path from "path";
import { VIDEO_PATH } from "../../constant/path";
import { createDirectoryIfNotExists } from "../../utils/directory";
import { Request } from "express";

const storage = multer.diskStorage({
	destination: (
		req: Request,
		file: Express.Multer.File,
		cb: (error: Error | null, destination: string) => void
	) => {
		const { groupId } = req.body;
		const dir = path.join(VIDEO_PATH, groupId);
		createDirectoryIfNotExists(dir);
		cb(null, dir);
	},
	filename: (
		req: Request,
		file: Express.Multer.File,
		cb: (error: Error | null, filename: string) => void
	) => {
		const filename = file.originalname.replace(/\s/g, "_");
		cb(null, filename);
	},
});

const upload = multer({ storage });

export default { storage, upload };
