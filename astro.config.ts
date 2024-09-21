// @ts-check
import { defineConfig } from "astro/config";
import type { AstroIntegration } from "astro";

import react from "@astrojs/react";

const tina = ({ directiveName = "tina" } = {}): AstroIntegration => ({
	name: "tina-cms",
	hooks: {
		"astro:config:setup": ({ addClientDirective }) => {
			addClientDirective({
				name: directiveName,
				entrypoint: "./client-directives/tina.mjs",
			});
		},
	},
});

// https://astro.build/config
export default defineConfig({
	integrations: [react(), tina()],
});
