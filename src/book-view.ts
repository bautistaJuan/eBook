import * as style from "./";
import { getData } from "./apis/getBooksItemsAPI";
class Book extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const style = document.createElement("style");
    style.innerHTML = `
    h1, h2, h3, h4{
      margin: 0;
    }
    .arcticle-result {
      border: solid 1px;
      background-color: rgba(128, 128, 128, 0.107);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 0 2px;
      overflow: hidden;
      height: auto;
      width: 200px;
    }
    .result_img {

      width: 200px;
      height: 250px;
    }
    .result{
      margin-bottom: 5px;
    }
    `;
    this.shadow.appendChild(style);
    this.render();
  }
  async render() {
    const e = await getData();
    console.log(e.items[0].volumeInfo.title);
    const title = e.items[0].volumeInfo.title;
    const author = e.items[0].volumeInfo.authors[0];
    // const srcImg = new URL("./images/Crimen-castigo.jpg", import.meta.url).href;
    const srcImg = e.items[0].volumeInfo.imageLinks.thumbnail;
    console.log(srcImg);

    const divContainer = document.createElement("div");
    divContainer.innerHTML = `
      <article class="arcticle-result">
        <img src=${srcImg} class="result result_img" />
        <h1 class="result result_atitle">${title}</h1>
        <h4 class="result result_author">${author}</h4>
     </article>
    `;
    this.shadow.appendChild(divContainer);
  }
}
customElements.define("book-elemet", Book);
