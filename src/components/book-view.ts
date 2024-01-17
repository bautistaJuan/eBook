import { getData } from "../apis/getBooksItemsAPI";

export default class Book extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const style = document.createElement("style");
    style.innerHTML = `
      h1, h2, h3, h4, p {
        margin: 0;
      }
      .container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        padding: 20px;
      }
      .div-container {
        cursor: pointer;
        width: 240px;
        height: auto;
        text-align: center;
        border-radius: 10px;
        box-shadow: 3px 10px 22px grey;
        transition: transform 0.3s ease-out; /* Añadido para una transición suave */
      }
      .div-container:hover {
        transform: scale(1.1); /* Añadido para agrandar la carta al pasar el ratón */
      }
      .result_img {
        box-shadow: 0px 4px 4px grey;
        border-radius: 13px;
        border-bottom: double 8px;
        border-left: groove 4px black;
        width: 230px;
        height: 260px;
      }
      .text-area {
        padding: 5px;
      }
      .description {
        display: none;
        overflow: scroll;
      }
      .container-popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        padding: 20px;
        border-radius: 10px;
        z-index: 1000;
      }
      .popup-btnClose{
        color: red;
        font-size: 31px;
        cursor: pointer;
      }
    `;
    this.shadow.appendChild(style);
    this.render();
  }

  async render() {
    const divContainer = document.createElement("div");
    divContainer.className = "container";
    const data = await getData();
    data.items.map(item => {
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
        divCardContainer.className = "div-container";
        divCardContainer.innerHTML = `
          <img class="result_img" src="${thumbnail}" alt="Book Cover" />
          <div class="text-area">
            <h3 class="title">${title}</h3>
            <p class="description">${description}</p>
          </div>
        `;
        divContainer.appendChild(divCardContainer);
      }
    });

    this.shadow.appendChild(divContainer);
  }
}

customElements.define("book-elemet", Book);
