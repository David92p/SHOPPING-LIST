import Elements from "../interfaces/Elements.js";

export const createQuantity: Elements = (
  type: string,
  select: HTMLSelectElement,
  t?: string
): void => {
  select.innerHTML = "";
  if (
    type == "Pasta - Riso" ||
    type == "Prodotti Ortofrutticoli" ||
    type == "Carne - Affettati" ||
    type == "Pesce" ||
    (type == "Latticini" && t != "Latte")
  ) {
    let options: string[] = ["g", "kg", "Pz"];
    options.forEach((opt) => {
      let option: HTMLOptionElement = document.createElement("option");
      option.innerText = opt;
      select.appendChild(option);
    });
  } else if (type == "Latticini" && t === "Latte") {
    let options: string[] = ["ml", "L"];
    options.forEach((opt) => {
      let option: HTMLOptionElement = document.createElement("option");
      option.innerText = opt;
      select.appendChild(option);
    });
  }
};
