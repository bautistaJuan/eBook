function initBookDescription() {
  class Book extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const style = document.createElement("style");
      this.render();
      this.shadow.appendChild(style);
    }
    render() {
      const div = document.createElement("div");
      div.innerHTML = `
              <h1>Page Book</h1>
              <a class="linkButton" href="/">Ver más</a>
          `;
      this.shadow.appendChild(div);
    }
  }
  customElements.define("book-description", Book);
}
export { initBookDescription };
