import type { Template } from "tinacms";

export const sponsorBlock: Template = {
	name: "sponsor",
	label: "Sponsor",
	ui: {
		itemProps: (values) => ({
			label: values?.name || "Sponsor",
		}),
	},
	// ui: {
	// 	defaultItem: {
	// 		tagline: "Here's some text above the other text",
	// 		headline: "This Big Text is Totally Awesome",
	// 		text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
	// 	},
	// },
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
};
