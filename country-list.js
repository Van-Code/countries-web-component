class XCountryList extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    fetch("https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name")
      .then((resp) => {
        if (!resp.ok) {
          throw Error("Err code: " + resp.status);
        } else {
          return resp.json();
        }
      })
      .then((data) => {
        data.forEach((itm) => {
          const item = new CountryItem(itm);
          shadow.appendChild(item);
        });
      })

      .catch((resp) => {
        const para = document.createElement("p");
        para.textContent =
          "There was a problem retrieving the data. Please try again later.";
        shadow.appendChild(para);
      });
  }
  connectedCallback() {
    this.setAttribute("tabindex", 0);
    this.setAttribute("role", "list");
  }
}
customElements.define("x-country-list", XCountryList);
