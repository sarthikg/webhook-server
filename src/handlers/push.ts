import { GitLabPushWebhook } from "./push.model.js";

export function handlePushEvent(payload: GitLabPushWebhook): void {
	console.log(payload);
	console.log("Push event triggered.");
}
