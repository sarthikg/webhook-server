export interface GitLabPushWebhook {
	object_kind: "push";
	event_name: "push";
	before: string;
	after: string;
	ref: string;
	checkout_sha: string;
	user_id: number;
	user_name: string;
	user_email: string;
	project_id: number;
	project: {
		name: string;
		web_url: string;
	};
	repository: {
		name: string;
		url: string;
		description: string;
		homepage: string;
	};
	commits: GitLabCommit[];
}
