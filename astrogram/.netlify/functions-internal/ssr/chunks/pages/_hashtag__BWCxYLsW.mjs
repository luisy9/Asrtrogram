/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent, F as Fragment } from '../astro_C3m9rwyv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Login_xHGj8tOF.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const OptionsImg = () => {
  const [popUp, setPopUp] = useState(false);
  const toggleModal = () => {
    setPopUp(!popUp);
  };
  const deletePost = () => {
    console.log("delete img");
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        onClick: () => toggleModal(),
        width: "24px",
        className: "stroke-white",
        height: "24px",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M20 12.5C20.2761 12.5 20.5 12.2761 20.5 12C20.5 11.7239 20.2761 11.5 20 11.5C19.7239 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.7239 12.5 20 12.5Z",
              fill: "#000000",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z",
              fill: "#000000",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M4 12.5C4.27614 12.5 4.5 12.2761 4.5 12C4.5 11.7239 4.27614 11.5 4 11.5C3.72386 11.5 3.5 11.7239 3.5 12C3.5 12.2761 3.72386 12.5 4 12.5Z",
              fill: "#000000",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }
          )
        ]
      }
    ),
    popUp === true ? /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "bg-black w-20 text-white right-0 z-50 absolute py-3 border-none rounded-md pl-3 flex", children: /* @__PURE__ */ jsxs("ul", { className: "", children: [
      /* @__PURE__ */ jsx("li", { className: "py-1", children: "Update" }),
      /* @__PURE__ */ jsx("li", { className: "py-1 text-red-500", onClick: deletePost, children: "Delete" })
    ] }) }) }) : null
  ] });
};

const $$Astro$1 = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Picture;
  const { image } = Astro2?.props;
  const url = "https://ricardhernandez.com/api";
  let id = "";
  let token = "";
  let myUserId = "";
  try {
    token = Astro2.cookies.get("token")?.value;
    const userid = await fetch(`${url}/refresh`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    myUserId = await userid.json();
    myUserId = myUserId?.id;
    console.log(myUserId);
    const resUserId = await fetch(`${url}/users/` + image?.userId, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    id = await resUserId.json();
  } catch (error) {
    console.log({ error });
  }
  const checkIfItIsMyImg = () => {
    return image.userId === myUserId;
  };
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#0F1218] h-screen px-4 py-4"> <div class="flex w-full justify-between items-center px-1"> <div class="flex items-center py-2"> <svg class="w-7 h-7 fill-white" width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> <a${addAttribute(`/user/${image?.userName}`, "href")} class="text-white">${image.userName}</a> </div> ${checkIfItIsMyImg() === true ? renderTemplate`${renderComponent($$result, "OptionsImg", OptionsImg, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/components/OptionsImg", "client:component-export": "default" })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`} </div> <img${addAttribute(`https://ricardhernandez.com/img/${image?.image}`, "src")} alt="imag" class="border-none rounded-md w-full"> <div class="py-2 text-white flex gap-3 items-center"> ${image?.comentario ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <p>${id?.userName}</p> <p class="font-extralight antialiased text-sm">${image?.comentario}</p> ` })}` : null} </div> <div class="flex gap-2 pt-2"> ${image?.hashtags?.split(",").map((hashtag) => {
    return renderTemplate`<div class=""> ${hashtag.length > 0 ? renderTemplate`<a${addAttribute(`/hashtags/${hashtag.includes(" ") ? hashtag.slice(2) : hashtag.includes("#") ? hashtag.slice(1) : hashtag}`, "href")} class="text-white px-2 py-1 border rounded-md"> ${hashtag} </a>` : null} </div>`;
  })} </div> </div>`;
}, "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/components/Picture.astro", void 0);

const $$Astro = createAstro();
const $$hashtag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$hashtag;
  const { hashtag } = Astro2.params;
  const url = "https://ricardhernandez.com/api";
  const token = Astro2.cookies.get("token")?.value;
  if (!token) {
    return Astro2.redirect("/Login");
  }
  let imagesWithHashTag = [];
  let allImagesWithHashTag = await fetch(`${url}/images/hashtag/${hashtag}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  console.log(allImagesWithHashTag);
  imagesWithHashTag = await allImagesWithHashTag.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astrogram" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=""> ${imagesWithHashTag?.map((image) => {
    return renderTemplate`${renderComponent($$result2, "Picture", $$Picture, { "image": image })}`;
  })} </div> ` })}`;
}, "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/pages/hashtags/[hashtag].astro", void 0);

const $$file = "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/pages/hashtags/[hashtag].astro";
const $$url = "/hashtags/[hashtag]";

const _hashtag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$hashtag,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Picture as $, _hashtag_ as _ };
