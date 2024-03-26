/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_C3m9rwyv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Login_xHGj8tOF.mjs';
import { $ as $$Picture } from './_hashtag__BWCxYLsW.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const url = "https://ricardhernandez.com/api";
  let imagesUser = [];
  let isCorrect = "";
  let numPaginationImg = 9;
  const token = Astro2.cookies.get("token")?.value;
  if (!token) {
    return Astro2.redirect("/Login");
  }
  try {
    const isCheckToken = await fetch(`${url}/refresh`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    isCorrect = await isCheckToken.json();
    if (isCorrect?.id) {
      const images = await fetch(`${url}/allimages`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      imagesUser = await images.json();
      const newArr = imagesUser.map((e, index) => {
        if (index <= numPaginationImg) {
          return e;
        }
      }).filter((e) => e !== void 0);
    } else {
      Astro2.redirect("/login");
    }
  } catch (error) {
    console.log(error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "feed" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=""> <div class="flex flex-col h-screen"> ${imagesUser?.map((image) => renderTemplate`${renderComponent($$result2, "Picture", $$Picture, { "image": image })}`)} </div> </div> ` })}`;
}, "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/pages/index.astro", void 0);

const $$file = "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
