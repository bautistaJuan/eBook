import { getData } from "../apis/getBooksItemsAPI";

export default class Book extends HTMLElement {
  shadow: ShadowRoot;
  titleBook: string;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.titleBook = this.getAttribute("titleBook")!;
    console.log("title", this.titleBook);
  }
  connectedCallback() {
    const style = document.createElement("style");
    style.innerHTML = `
    *{
      box-sizing: border-box;
    }
      h1, h2, h3, h4, p {
        margin: 0;
      }
      .div-container-card {
        border: solid blue;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: solid blue;
        background-color: orangered;
        color: white;
        border-radius: 20px;
        box-shadow: 0 3px 12px 2px;
        position: relative;
        padding: 2px;
      }
      .desc{
        display:none;
        height: 100%;
        position: absolute;
        background-color: black;
        overflow: auto;
      }
      `;
    this.shadow.appendChild(style);
    this.render();
  }

  async render() {
    const data = await getData(this.titleBook);

    data.items.forEach(item => {
      let thumbnail =
        item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
      let description = item.volumeInfo.description;
      let title = item.volumeInfo.title;

      if (
        thumbnail !== undefined &&
        description !== undefined &&
        title !== undefined
      ) {
        const divCardContainer = document.createElement("div");
        divCardContainer.className = "div-container-card column";
        divCardContainer.innerHTML = `
          <div class="result">
            <img class="result_img" src="${thumbnail}" alt="Book Cover" />
            <div class="text-area">
              <h3 class="title">${title}</h3>
              <p class="author">Author</p>
            </div>
          </div>
          <div class="desc">
            <button class="button"><a class="linkButton" href="https://www.google.com.ar">Ver más</a></button>
            <p class="description">${description}</p>
          </div>
        `;
        const desc: HTMLElement = divCardContainer.querySelector(".desc")!;
        const result: HTMLElement = divCardContainer.querySelector(".result")!;

        divCardContainer.addEventListener("click", e => {
          desc.style.display =
            desc.style.display === "none" || desc.style.display === ""
              ? "block"
              : "none";
        });
        this.shadow.appendChild(divCardContainer);
      }
    });
  }
}

customElements.define("book-elemet", Book);
