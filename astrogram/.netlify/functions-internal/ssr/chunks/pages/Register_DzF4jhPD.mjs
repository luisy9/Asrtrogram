/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_C3m9rwyv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("name");
      const password = data.get("password");
      const url = "https://ricardhernandez.com/api";
      const login = await fetch(`${url}/register`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, password })
      }).then((res) => res.json()).then((user) => console.log(user)).catch((error) => console.log(error));
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#101826]"> <div class="bg-[#101826] h-screen"> <div class="bg-sky-500 flex justify-center items-center w-full h-full"> <form method="POST"> <div class=""> <h1 class="text-6xl">Register</h1> </div> <div class="py-2"> <input type="text" name="name" class="h-12 w-full"> </div> <div class="py-2"> <input type="text" name="password" class="h-12 w-full"> </div> <div class=""> <button class="px-3 py-1 bg-green-500 w-full text-2xl">Registrarse</button> </div> </form> </div> </div> </div>`;
}, "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/pages/Register.astro", void 0);

const $$file = "/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/pages/Register.astro";
const $$url = "/Register";

export { $$Register as default, $$file as file, $$url as url };
