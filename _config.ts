import lume from "lume/mod.ts";
import pug from "lume/plugins/pug.ts";
import unocss from "lume/plugins/unocss.ts";

const site = lume();

site.use(pug());
site.use(unocss());

export default site;
