import fs from "fs";

export function createDirectoryIfNotExists(...dirs: string[]) {
	dirs.forEach((dir) => {
		if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
	});
}
