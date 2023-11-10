import express, { Express } from "express";
import { GitLabPushWebhook } from "./handlers/push.model.js";
import { handlePushEvent } from "./handlers/push.js";

export function server(port: number): void {
	const app: Express = express();

	app.get("/webhook", (req, res) => {
		handlePushEvent(req.body as GitLabPushWebhook);
		res.send("OK");
	});

	app.listen(port, () => {
		console.log("Server is up!");
	});
}
