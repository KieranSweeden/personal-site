import lume from "lume/mod.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import unocss from "lume/plugins/unocss.ts";

const site = lume();

site.use(nunjucks());
site.use(unocss());

export default site;
