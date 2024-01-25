import { initRouter } from "./router.ts";
async function main() {
  const root = document.querySelector(".root");
  initRouter(root);
}
main();
