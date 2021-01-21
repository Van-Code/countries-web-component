class CountryItem extends HTMLElement {
  constructor(itm) {
    super();

    const template = document.getElementById("country-item-template").content;
    const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
      template.cloneNode(true)
    );

    for (const [key, value] of Object.entries(itm)) {
      let el = this.shadowRoot.querySelector(`#${key}`);

      if (key !== "alpha2Code") {
        el.textContent = value;
      } else {
        el.setAttribute(
          "src",
          `https://www.countryflags.io/${value.toLowerCase()}/flat/64.png`
        );
        el.setAttribute("alt", `flag of ${itm.name}`);
        el.setAttribute("role", "presentation");
      }
    }
  }
  connectedCallback() {
    this.setAttribute("tabindex", 0);
    this.setAttribute("role", "listitem");
  }
}
customElements.define("country-item", CountryItem);
