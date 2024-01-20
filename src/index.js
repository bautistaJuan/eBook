import { initRouter } from "./router.ts";
import { getData } from "./apis/getBooksItemsAPI.ts";
async function main() {
  const root = document.querySelector(".root");
  initRouter(root);
}
main();
