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
      h1, h2, h3, h4, p {
        margin: 0;
      }

      .div-container-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        height: auto;
        text-align: center;
        border-radius: 10px;
        transition: transform 0.3s ease-out; /* Añadido para una transición suave */
      }
      .desc{
        display:none;
      }
      .div-container-card:hover {
        .result_img {
          display:none;
        }
        .desc{
          display:block;
          transition: transform 0.3s ease-out; /* Añadido para una transición suave */
        }
        overflow: auto;
        transform: scale(1); /* Añadido para agrandar la carta al pasar el ratón */
      }
      .result_img {
        box-shadow: -4px 4px 8px grey;
        border-radius: 10px;
        border-bottom: double 2px;
        border-left: groove 2px black;
        height: 200px;
      }
      .text-area {
        margin-top: 7px;
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
    const image = new URL(
      "../images/Crimen-castigo.jpg",
      import.meta.url
    ).toString();

    divContainer.innerHTML = `
      <div class="div-container-card">
        <img class="result_img" src="${image}" alt="Book Cover" />
        <div class="text-area">
          <h3 class="title">Titulo de tu libro</h3>
          <p>Author</p>
        </div>
        <div class="desc">
         <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo laboriosam consequuntur earum corrupti numquam iste quisquam optio nihil, laudantium officia.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam!         
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam!         
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam!         
          </p>
        </div>
      </div>
    `;
    // const data = await getData(this.titleBook);
    // data.items.map(item => {
    //   let thumbnail =
    //     item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    //   let description = item.volumeInfo.description;
    //   let title = item.volumeInfo.title;

    //   if (
    //     thumbnail !== undefined &&
    //     description !== undefined &&
    //     title !== undefined
    //   ) {
    //     const divCardContainer = document.createElement("div");
    //     divCardContainer.className = "div-container";
    //     divCardContainer.innerHTML = `
    //       <img class="result_img" src="${thumbnail}" alt="Book Cover" />
    //       <div class="text-area">
    //         <h3 class="title">${title}</h3>
    //         <p class="description">${description}</p>
    //       </div>
    //     `;
    //     divContainer.appendChild(divCardContainer);
    //   }
    // });

    this.shadow.appendChild(divContainer);
  }
}

customElements.define("book-elemet", Book);
