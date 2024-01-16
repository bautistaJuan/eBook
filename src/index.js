import { getData } from "./apis/getBooksItemsAPI";
import "./pages/home.ts";
import "./components/book-view.ts";
async function main() {
  const root = document.querySelector(".root");
  root.innerHTML = `
    <home-page></home-page>
  `;
}
main();
