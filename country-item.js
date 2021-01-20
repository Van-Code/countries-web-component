class CountryItem extends HTMLElement {
  constructor(itm) {
    super();

    const { alpha2Code, name, capital } = itm;

    const template = document.getElementById("country-item-template").content;
    const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
      template.cloneNode(true)
    );

    let nameSlot = this.shadowRoot.querySelector("#name");
    nameSlot.textContent = name;

    const capitalSlot = this.shadowRoot.querySelector("#capital");
    capitalSlot.textContent = capital;

    this.style = `background-image:url('https://www.countryflags.io/${alpha2Code.toLowerCase()}/flat/64.png') `;
  }
  connectedCallback() {
    this.setAttribute("tabindex", 0);
    this.setAttribute("role", "listitem");
  }
}
customElements.define("country-item", CountryItem);
