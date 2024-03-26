/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_C3m9rwyv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Picture } from './_hashtag__BWCxYLsW.mjs';
import { $ as $$Layout } from './Login_xHGj8tOF.mjs';

const $$Astro = createAstro();
const $$user = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$user;
  Astro2.params;
  const url = "https://ricardhernandez.com/api";
  let imagesUser = [];
  let isCorrect = "";
  const token = Astro2.cookies.get("token")?.value;
  if (!token) {
    return Astro2.redirect("/Login");
  }
  const isCheckToken = await fetch(`${url}/refresh`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  isCorrect = await isCheckToken.json();
  if (isCorrect?.id) {
    const myPicures = await fetch(`${url}/user/${isCorrect.id}/images`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    imagesUser = await myPicures.json();
  } else {
    return Astro2.redirect("/login");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astrogram" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=""> <div class="bg-[#0F1218]"> <div class="flex justify-center pt-8"> <svg class="w-28 h-28 fill-white" width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div> <h1 class="text-center text-white">${isCorrect.name}</h1> </div>  ${imagesUser?.map((image) => renderTemplate`${renderComponent($$result2, "Picture", $$Picture, { "image": image })}`)} </div> ` })}`;
}, "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/pages/user/[user].astro", void 0);

const $$file = "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/pages/user/[user].astro";
const $$url = "/user/[user]";

export { $$user as default, $$file as file, $$url as url };
