/* empty css                          */
import { c as createAstro, d as createComponent } from '../astro_C3m9rwyv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Logout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logout;
  Astro2.cookies.delete("token");
  return Astro2.redirect("/Login");
}, "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/pages/Logout.astro", void 0);

const $$file = "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/pages/Logout.astro";
const $$url = "/Logout";

export { $$Logout as default, $$file as file, $$url as url };
