import ffmpeg from "fluent-ffmpeg";
import path from "path";
import fs from "fs";
import { VIDEO_PATH, VIDEO_SERVE_PATH } from "../../constant/path";
import { createDirectoryIfNotExists } from "../../utils/directory";

function encodeVideo(
	groupId: string,
	filename: string,
	callback: (error?: Error) => void
) {
	const filePath = path.join(VIDEO_PATH, groupId, filename);
	const outputFilename = path.parse(filename).name + ".mp4";
	const outputPath = path.join(VIDEO_SERVE_PATH, groupId);

	createDirectoryIfNotExists(outputPath);

	ffmpeg(filePath)
		.output(path.join(outputPath, outputFilename))
		.on("end", () => {
			console.log("Video encoding finished");
			fs.unlink(filePath, (err) => {
				if (err) {
					console.error("Error deleting original video:", err);
				}

				console.log("Original video deleted");
			});
			callback();
		})
		.on("error", (err) => {
			console.error("Error encoding video:", err);
			callback(err);
		})
		.run();
}

export default { encodeVideo };
