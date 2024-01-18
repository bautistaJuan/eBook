import { getData } from "../apis/getBooksItemsAPI";

export default class Search extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const style = document.createElement("style");
    style.innerHTML = `
      .formSearchBook{
        display:flex;
        gap: 5px;
        width: 100%;
        border:solid;
        padding: 10px;
        text-align: center;
      }
      .inputText, .btn{
        height: 40px;
      }
      .inputText{
        width: 400px;
      }
      .btn{        
        width: 90px;
        border: double;
        border-radius: 10px;
      }
    `;
    this.shadow.appendChild(style);
    this.render();
  }
  search(divFormContainer: HTMLElement) {
    const form: HTMLFormElement =
      divFormContainer.querySelector(".formSearchBook")!;
    const input: HTMLInputElement =
      divFormContainer.querySelector("#inputSearch")!;
    form.addEventListener("submit", e => {
      e.preventDefault();
      let title = input.value;
      if (title) {
        return getData(title);
      } else {
        throw new Error("Title is empty");
      }
    });
  }
  render() {
    const divFormContainer = document.createElement("div");
    divFormContainer.className = "divFormContainer";
    divFormContainer.innerHTML = `
    <form class="formSearchBook">
      <input type="text" class="inputText" id="inputSearch" placeholder="Title or Author">
      <button class="btn" id="btnSend" type="submit">Search</button>
    </form>
    `;
    this.search(divFormContainer);
    this.shadow.appendChild(divFormContainer);
  }
}

customElements.define("search-elemet", Search);
