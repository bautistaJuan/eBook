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
      this.shadow.appendChild(style);
      this.render();
    }
    async render() {
      const divContainer = document.createElement("div");
      divContainer.className = "book-element_container";
      divContainer.innerHTML = `
        <book-elemet class="cards"></book-elemet>
      `;

      this.shadow.appendChild(divContainer);
    }
  }
  customElements.define("home-page", Home);
}
export { initHome };
