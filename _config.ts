import lume from "lume/mod.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import unocss from "lume/plugins/unocss.ts";

const site = lume();

site.use(nunjucks());
site.use(
	unocss({
		options: {
			theme: {
				colors: {
					dark: "#283E0F",
					light: "#E3FAB7",
				},
			},
		},
	})
);

export default site;
