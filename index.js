import { routes } from "./routes.js";
import Router from "./Router.js";

const router = new Router(routes);

document.querySelectorAll("li")[0].addEventListener("click", () => {
  router.loadRoute({ path: "/" });
});
document.querySelectorAll("li")[1].addEventListener("click", () => {
  router.loadRoute({ path: "/contacto" });
});
document.querySelectorAll("li")[2].addEventListener("click", () => {
  router.loadRoute({ path: "/precios" });
});
