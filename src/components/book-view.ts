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
      .container{
        border: solid red;
        display: flex;
        border: solid red;
        flex-direction: row;
        flex-wrap: wrap;
      }

      .div-container-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-align: center;
      }
      .desc {
        overflow-y: auto;
        background-color: white;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 5px;
        text-align: justify;
        width: 300px;
        height: 400px;
      }      
      .result_img {
        box-shadow: -4px 4px 8px grey;
        border-radius: 10px;
        border-bottom: double 2px;
        border-left: groove 2px black;
      }
      .title, .author, .linkButton{
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-style: normal
      }
      .text-area {
        margin-top: 7px;
      }
      .description{
        font-family: "Merriweather", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 14px; 
      }
      .desc a {
        color: white;
      }
      .desc button {
        width: 89px;
        margin: 10px 0 10px;
        background: black;
      }
      .column {
        flex: 1; 
        margin: 10px;
        padding-bottom: 9px;
        box-sizing: border-box;
      } 

      `;
    this.shadow.appendChild(style);
    this.render();
  }

  async render() {
    const divContainer = document.createElement("div");
    divContainer.className = "container";

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
          <div class="desc" style="display: none;">
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

        divContainer.appendChild(divCardContainer);
      }
    });
    this.shadow.appendChild(divContainer);
  }
}

customElements.define("book-elemet", Book);
