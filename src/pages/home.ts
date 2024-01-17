export default class Home extends HTMLElement {
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
    let click = false;
    const cards: any = this.shadow.querySelector(".cards")!;
    const isClick = this.shadow.querySelector(".book-element_container");
    // isClick?.addEventListener("click", () => {
    // cards.style.display = !click ? "inherit" : "none";
    // click = !click;
    // if (!click) {
    //   cards.style.display = "inherit";
    //   click = !click;
    // } else {
    //   cards.style.display = "none";
    //   click = !click;
    // }
    // });
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
