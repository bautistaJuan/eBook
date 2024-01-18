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
        <div class="results-container"></div>
      `;

      this.shadow.appendChild(divContainer);

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
