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
    //Luces
    const style = document.createElement("style");
    style.innerHTML = `
    *{
      box-sizing: border-box;
    }
      h1, h2, h3, h4, p {
        margin: 0;
      }
      .containerBooks{
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
      }
      .div-container-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        width: 180px;
        height: 290px;
        overflow: auto;
        box-shadow: -2px 4px 7px 0px;
        border-radius: 5px;
        cursor:pointer;

      }
      .desc{
        display:none;
        position: absolute;
        overflow: auto;
        background-color: white;
        font-size: 17px;
        text-align: start;
        color: black;
        padding: 6px;
        height: 100%;
      }
      .result_img{
        width: 100%;
        object-fit: scale-down;
      }
      .title, .author{
        text-decoration: underline;
      }
      .button > a {
        text-decoration: none;
        font-size: 15px;
        color: white;
      }
      .button{
        width: 100%;
        border-radius: 4px;
        padding: 5px;
        border: none;
        background-color: black;
        margin-top: 10px;
      }

      `;
    this.shadow.appendChild(style);
    this.render();
  }

  async render() {
    //Camara
    const containerBooks = document.createElement("div");
    containerBooks.className = "containerBooks";
    const data = await getData(this.titleBook);
    //Accion
    data.items.forEach(item => {
      let thumbnail =
        item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
      let description = item.volumeInfo.description;
      let title = item.volumeInfo.title;
      let author = item.volumeInfo.authors;
      let previewLink =
        item.volumeInfo.webReaderLink || item.volumeInfo.previewLink;

      if (
        thumbnail !== undefined &&
        description !== undefined &&
        title !== undefined &&
        author !== undefined &&
        previewLink !== undefined
      ) {
        const divCardContainer = document.createElement("div");
        divCardContainer.className = "div-container-card";
        divCardContainer.innerHTML = `
          <div class="result">
            <img class="result_img" src="${thumbnail}" alt="Book Cover" />
            </div>
            <div class="text-area">
              <h3 class="title">${title}</h3>
              <p class="author">${author}</p>
            </div>
          <div class="desc">
          <p class="description">${description}</p>
          <button class="button"><a class="linkButton" target="_blank" href=${previewLink}>Ver más</a></button>
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
        containerBooks.appendChild(divCardContainer);
      }
      this.shadow.appendChild(containerBooks);
    });
  }
}

customElements.define("book-elemet", Book);
