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
      .container{
        border: solid red;
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
        display: none;
        position: fixed;
        height: 300px;
        width: 200px;
        overflow-y: auto; 
        background-color: white;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 5px; 
      }      
      .result_img {
        box-shadow: -4px 4px 8px grey;
        border-radius: 10px;
        border-bottom: double 2px;
        border-left: groove 2px black;
        height: 200px;
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
          <p class="author">Author</p>
        </div>
        <div class="desc">
          <button class="button"><a  class="linkButton" href="https://www.google.com.ar">Ver más</a></button>
         <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo laboriosam consequuntur earum corrupti numquam iste quisquam optio nihil, laudantium officia.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam!         
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam!         
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam!         
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam!         
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam!         
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam!         
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam!         
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam!         
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam!         
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam!         
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam!         
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam!         
          </p>
        </div>
      </div>
    `;
    const open: HTMLImageElement = divContainer.querySelector(
      ".div-container-card"
    )!;
    const hiddenImg: HTMLImageElement =
      divContainer.querySelector(".result_img")!;
    const desc: HTMLDivElement = divContainer.querySelector(".desc")!;
    open.addEventListener("click", e => {
      desc.style.display = desc.style.display === "block" ? "none" : "block";
      // Equal
      // if (desc.style.display === "block") {
      //   desc.style.display = "none";
      // } else {
      //   desc.style.display = "block";
      // }
    });
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
