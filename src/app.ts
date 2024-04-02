import express, { Request, Response } from "express";
import videoRoute from "./modules/video/video.route";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!");
});

app.use("/video", videoRoute);

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
