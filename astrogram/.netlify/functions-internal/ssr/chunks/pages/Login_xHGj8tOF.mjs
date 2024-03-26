/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot } from '../astro_C3m9rwyv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$HeaderNavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderNavBar;
  const token = Astro2.cookies.get("token")?.value;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-[#0F1218] border-gray-200 dark:bg-[#0F1218]"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><circle cx="12" cy="12" r="8" stroke="#FFFFFF" stroke-width="1.5" stroke-width="1.5"></circle><path d="M17.4995 6.34835C19.7975 5.80967 21.4447 5.87208 21.8376 6.66002C22.5686 8.12616 18.6797 11.5491 13.1515 14.3053C7.62327 17.0616 2.5492 18.1074 1.81821 16.6413C1.4263 15.8553 2.36234 14.5067 4.16701 13.0001" stroke="#FFFFFF" stroke-width="1.5"></path><path d="M9.5 10.51L9.51 10.4989" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Astrogram</span> </a> ${token ? renderTemplate`<a href="/Logout"> <div class="text-white">Logout</div> </a>` : null} </div> </nav>`;
}, "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/components/HeaderNavBar.astro", void 0);

const FooterNavBar = ({ popUp, setPopUp }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("nav", { className: "bg-white border-gray-200 dark:bg-[#0F1218] \n        h-20 bottom-0 fixed w-full", children: /* @__PURE__ */ jsxs("div", { className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3", children: [
    /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent\n        md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white\n         md:dark:hover:text-blue-500 dark:hover:bg-gray-700\n         dark:hover:text-white md:dark:hover:bg-transparent",
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6 text-gray-800 dark:text-white",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2.5",
                d: "m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
              }
            )
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent\n        md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white\n         md:dark:hover:text-blue-500 dark:hover:bg-gray-700\n         dark:hover:text-white md:dark:hover:bg-transparent",
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6 text-gray-800 dark:text-white",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-width": "2.5",
                d: "m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent\n        md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white\n         md:dark:hover:text-blue-500 dark:hover:bg-gray-700\n         dark:hover:text-white md:dark:hover:bg-transparent",
        onClick: () => setPopUp(true),
        children: /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "w-6 h-6 text-gray-800 dark:text-white",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  stroke: "currentColor",
                  "stroke-linejoin": "round",
                  "stroke-width": "2.5",
                  d: "M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  stroke: "currentColor",
                  "stroke-linejoin": "round",
                  "stroke-width": "2.5",
                  d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent\n        md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white\n         md:dark:hover:text-blue-500 dark:hover:bg-gray-700\n         dark:hover:text-white md:dark:hover:bg-transparent",
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6 text-gray-800 dark:text-white",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2.5",
                d: "M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("a", { href: "/Login", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent\n      md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white\n       md:dark:hover:text-blue-500 dark:hover:bg-gray-700\n       dark:hover:text-white md:dark:hover:bg-transparent",
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6 text-gray-800 dark:text-white",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                stroke: "currentColor",
                "stroke-width": "2.5",
                d: "M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              }
            )
          }
        )
      }
    ) })
  ] }) }) });
};

const PopUpUpload = ({ setPopUp, token }) => {
  const [hashtag, setHashTag] = useState([]);
  const [errorValidation, setErrorValidation] = useState(null);
  const [nameHashtag, setNameHashtag] = useState("");
  const [descripcion, setDescription] = useState("");
  const onChangeInput = (value) => {
    setNameHashtag(value);
  };
  const onChangeTextArea = (value) => {
    setDescription(value);
  };
  const addHashTag = () => {
    const name = nameHashtag;
    if (name.length > 0) {
      const isError = name.includes(",");
      setErrorValidation(isError);
    } else {
      setNameHashtag("");
    }
  };
  useEffect(() => {
    if (!errorValidation) {
      setHashTag([...hashtag, nameHashtag]);
      setErrorValidation(true);
      setNameHashtag("");
    }
  }, [errorValidation]);
  const onSubmitImage = async (event2) => {
    event2.preventDefault();
    const url = "https://ricardhernandez.com/api";
    const data = new FormData();
    const tags = hashtag;
    const file = event2.target?.elements?.image.files[0];
    data.append("file", file);
    data.append("hashtags", tags.join(" "));
    const opcions = {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Bearer ${token}`
      }
      // credentials: "include",
    };
    try {
      const res = await fetch(`${url}/upload`, opcions).then((res2) => res2.json()).then((images) => setPopUp(false)).catch((error) => console.log(error));
      const response = await res.json();
    } catch (error) {
      console.log(error.json());
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed", children: /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-full fixed top-0 z-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-white w-full h-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between px-5 w-full bg-red-500", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-xl", children: "Upload Image" }),
      /* @__PURE__ */ jsx("div", { className: "cursor-pointer", onClick: () => setPopUp(false), children: "X" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-sky-500", children: /* @__PURE__ */ jsxs("form", { onSubmit: onSubmitImage, encType: "multipart/form-data", children: [
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "file",
          className: "",
          name: "image",
          accept: "image/*",
          capture: "environment"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "", children: "Hashtag:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: "",
            value: nameHashtag,
            onChange: () => onChangeInput(event.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-green-500 text-white px-2 py-1",
            onClick: addHashTag,
            children: "Add +"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx(
        "textarea",
        {
          className: "border rounded-md w-full",
          onChange: () => onChangeTextArea(event.target.value)
        }
      ) }),
      hashtag.map((e, index) => {
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("p", { children: e }, index) });
      }),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "border px-4 py-1 rounded-md", children: "Enviar" })
    ] }) })
  ] }) }) });
};

const FooterComponent = ({ token }) => {
  const [popUp, setPopUp] = useState(false);
  return /* @__PURE__ */ jsxs("main", { children: [
    popUp ? /* @__PURE__ */ jsx(PopUpUpload, { setPopUp, token }) : null,
    /* @__PURE__ */ jsx("div", { className: "w-full h-full", children: /* @__PURE__ */ jsx(FooterNavBar, { popUp, setPopUp }) })
  ] });
};

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const token = Astro2.cookies.get("token")?.value;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Varela&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="font-sans"> <div class="w-screen h-screen"> ${renderComponent($$result, "HeaderNavBar", $$HeaderNavBar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "FooterComponent", FooterComponent, { "client:load": true, "token": token, "client:component-hydration": "load", "client:component-path": "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/components/FooterComponent", "client:component-export": "default" })} </div> </body></html>`;
}, "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const token = Astro2.cookies.get("token")?.value;
  if (token) {
    return Astro2.redirect("/MyAccount");
  }
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("name");
      const password = data.get("password");
      const url = "https://ricardhernandez.com/api";
      const login = await fetch(`${url}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, password })
      }).then((res) => res.json()).then((user) => Astro2.cookies.set("token", user?.token)).catch((error) => console.log(error));
      if (Astro2.cookies.has("token")) {
        return Astro2.redirect("/");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astrogram", "data-astro-cid-wpdkkdke": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#0F1218] w-full h-full" data-astro-cid-wpdkkdke> <div class="h-2/6" data-astro-cid-wpdkkdke> <form method="POST" data-astro-cid-wpdkkdke> <div class="rounded-md py-2 px-5" data-astro-cid-wpdkkdke> <div class="flex justify-center pb-10 pt-20" data-astro-cid-wpdkkdke> <h1 class="text-4xl text-semibold text-white" data-astro-cid-wpdkkdke>Astrogram</h1> </div> <div class="flex flex-col items-center justify-center gap-10 w-full py-1" data-astro-cid-wpdkkdke> <div class="w-full" data-astro-cid-wpdkkdke> <input type="text" class="text-md px-1 border py-3 rounded-lg bg-transparent w-full
                placeholder:px-1 text-[#FFFF] placeholder:text-[#8F8F8F] placeholder:text-md" placeholder="User name" name="name" data-astro-cid-wpdkkdke> </div> <div class="w-full" data-astro-cid-wpdkkdke> <input type="password" class="px-1 border py-3 rounded-lg border-white bg-transparent w-full text-[#FFFF]
              placeholder:px-1 placeholder:font-extralight placeholder:text-[#8F8F8F] placeholder:text-md text-md" placeholder="Password" name="password" data-astro-cid-wpdkkdke> </div> <div class="w-full" data-astro-cid-wpdkkdke> <button class="text-xl py-2 text-black border rounded-lg w-full bg-white" data-astro-cid-wpdkkdke> <div class="flex justify-center items-center gap-1" data-astro-cid-wpdkkdke> <div class="" data-astro-cid-wpdkkdke> <svg class="w-8 h-8 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" data-astro-cid-wpdkkdke> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z" data-astro-cid-wpdkkdke></path> </svg> </div>
Login
</div> </button> </div> <div class="flex w-full justify-center gap-2" data-astro-cid-wpdkkdke> <div class="" data-astro-cid-wpdkkdke> <a href="/register" class="text-md bg-gradient-to-r text-transparent bg-clip-text from-10% from-indigo-500 via-purple-500 to-pink-300" data-astro-cid-wpdkkdke>No tienes cuenta? Registrate</a> </div> </div> </div> </div> </form> </div> </div> ` })} `;
}, "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/pages/Login.astro", void 0);

const $$file = "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/pages/Login.astro";
const $$url = "/Login";

const Login = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Login as L };
