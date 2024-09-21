import { defineConfig } from "tinacms";
import { sponsorBlock } from "./blocks/sponsor";

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	"main";

export default defineConfig({
	branch,

	// Get this from tina.io
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "",
			publicFolder: "public",
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			{
				name: "sponsor",
				label: "Sponsoren",
				path: "content/sponsors",
				format: "json",
				fields: [
					{
						type: "object",
						list: true,
						name: "blocks",
						label: "Inhalt",
						templates: [sponsorBlock],
					},
				],
				ui: {
					allowedActions: {
						create: false,
						delete: false,
					},
					router: ({ document, collection }) => {
						if (document._sys.path === "content/sponsors/sponsors.json") {
							return "/";
						}
						return undefined;
						// 	throw new Error("Not implemented");
						// 	return undefined;
						// 	// if (collection.name === "sponsor") {
						// 	// 	return "/";
						// 	// }
						// 	// return document._sys.filename;
						// 	// console.log({ filename: document._sys.filename, document });
						// 	// // navigate to the home page
						// 	// if (document._sys.filename === "home") {
						// 	// 	return "/";
						// 	// }
						// 	// navigate to the about page
						// 	// if (document._sys.filename === "about") {
						// 	// 	return "/about";
						// 	// }
						// 	// return undefined;
					},
				},
			},
			{
				name: "sponsor2",
				label: "Sponsoren 2",
				path: "content/sponsors2",
				format: "json",
				fields: [
					{
						type: "string",
						label: "Name",
						name: "name",
					},
					{
						type: "image",
						label: "Bild",
						name: "image",
					},
					{
						type: "string",
						label: "Level",
						name: "level",
						options: ["gold", "silver", "bronze"],
					},
					{
						type: "string",
						label: "Ortschaft",
						name: "location",
					},
					{
						type: "string",
						label: "Website",
						name: "url",
					},
				],
			},
		],
	},
});
