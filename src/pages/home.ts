function initHome(params) {
  class Home extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      //Luces
      const style = document.createElement("style");
      style.innerHTML = `
        .book-element_container{
          min-height: 100vh;
        }
        .formSearchBook{
          gap:2px;
          display: flex;
          height: 34px;
          justify-content: center;
          padding: 3px;
          margin-top: 30px 
        }
  
        .inputText{
          width:50%;
        }
        .btn{
          border: none;
          background-color: #0179ca;
          border-radius: 5px;
          width: 60px;
          color: white;
          cursor: pointer;
          font-weight: 600;
        }
        .inputText, .btn{
          padding: 5px; 
          font-family: "Roboto Slab", serif;
          font-weight: 500;
          font-style: normal;
        }
   
      `;
      this.render();
      this.shadow.appendChild(style);
    }

    async render() {
      //Camara
      const divContainer = document.createElement("div");
      divContainer.className = "book-element_container";

      divContainer.innerHTML = `
        <form class="formSearchBook">
          <input type="text" class="inputText" id="inputSearch" placeholder="Title or Author">
          <button class="btn" id="btnSend" type="submit">Search</button>
        </form>
        <div class="results-container"></div>
      `;

      this.shadow.appendChild(divContainer);

      // Accion
      const form: HTMLFormElement =
        divContainer.querySelector(".formSearchBook")!;
      const input: HTMLInputElement =
        divContainer.querySelector("#inputSearch")!;
      const resultsContainer: HTMLElement =
        divContainer.querySelector(".results-container")!;

      form.addEventListener("submit", async e => {
        e.preventDefault();
        let title = input.value;
        resultsContainer.innerHTML = "";
        const carta = document.createElement("div");
        carta.innerHTML = `
          <book-elemet class="cards" titleBook=${title}></book-elemet>
        `;
        resultsContainer.appendChild(carta);
      });
    }
  }

  customElements.define("home-page", Home);
}

export { initHome };
