function initHome(params) {
  class Home extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
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
        }
        .results-container{
          border: solid;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          margin-top: 50px;
        }
        .inputText{
          width:50%;
        }
        .inputText, .btn{
          padding: 5px; 
          font-family: "Roboto Slab", serif;
          font-weight: 500;
          font-style: normal;
        }
        .column {
          flex: 1; 
          margin: 10px;
          padding-bottom: 9px;
          border: 1px solid #ddd;
          box-sizing: border-box;
        }    
      `;
      this.render();
      this.shadow.appendChild(style);
    }

    async render() {
      const divContainer = document.createElement("div");
      divContainer.className = "book-element_container";

      divContainer.innerHTML = `
        <form class="formSearchBook">
          <input type="text" class="inputText" id="inputSearch" placeholder="Title or Author">
          <button class="btn" id="btnSend" type="submit">Search</button>
        </form>
        <div class="results-container">
          <book-elemet class="cards column"  ></book-elemet>
          <book-elemet class="cards column" ></book-elemet>
          <book-elemet class="cards column" ></book-elemet>
          <book-elemet class="cards column" ></book-elemet>
          <book-elemet class="cards column" ></book-elemet>
          <book-elemet class="cards column" ></book-elemet>
          <book-elemet class="cards column" ></book-elemet>
        </div>
      `;

      this.shadow.appendChild(divContainer);

      const form: HTMLFormElement =
        divContainer.querySelector(".formSearchBook")!;
      const input: HTMLInputElement =
        divContainer.querySelector("#inputSearch")!;
      const resultsContainer: HTMLElement =
        divContainer.querySelector(".results-container")!;

      // form.addEventListener("submit", async e => {
      //   e.preventDefault();
      //   let title = input.value;
      //   resultsContainer.innerHTML = "";
      //   const carta = document.createElement("div");
      //   carta.innerHTML = `
      //     <book-elemet class="cards" titleBook=${title}></book-elemet>
      //   `;
      //   resultsContainer.appendChild(carta);
      // });
    }
  }

  customElements.define("home-page", Home);
}

export { initHome };
