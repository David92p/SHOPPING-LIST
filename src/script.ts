import { LIST_MEASURES } from "./data/list_measures.js";
import { LIST_PRODUCTS } from "./data/list_products.js";
import { setListMeasures } from "./functions/setListMeasures.js";
import { setListProducts } from "./functions/setListProducts.js";
import { setTdTable } from "./functions/setTdTable.js";

const form = document.querySelector("form") as HTMLFormElement;
const typology = document.querySelector("#typology") as HTMLSelectElement;
const products = document.querySelector("#product") as HTMLSelectElement;
const quantity = document.querySelector("#quantity") as HTMLInputElement;
const quantityType = document.querySelector(
  "#quantityType"
) as HTMLSelectElement;
const textArea = document.querySelector("textarea") as HTMLTextAreaElement;
const table = document.querySelector("table") as HTMLTableElement;
const btn = document.querySelector("button") as HTMLButtonElement;

let valueTipology = typology.value;
let valueProduct = products.value;

typology.addEventListener("change", (e: Event) => {
  e.preventDefault();

  // let span = document.querySelector(".error-type") as HTMLSpanElement
  // span?.remove()
  typology.style.border = "1px solid black";

  products.removeAttribute("disabled");
  products.classList.remove("not-allowed");

  quantity.removeAttribute("disabled");
  quantity.classList.remove("not-allowed");

  quantityType.removeAttribute("disabled");
  quantityType.classList.remove("not-allowed");

  textArea.removeAttribute("disabled");
  textArea.classList.remove("not-allowed");

  if (typology.value !== valueTipology) {
    quantity.value = "";
    quantityType.value = "";
    textArea.value = "";
  }
  setListProducts({
    type: typology.value,
    select: products,
    list: LIST_PRODUCTS,
  });

  setListMeasures({
    type: products.value,
    select: quantityType,
    list: LIST_MEASURES,
  });
});

products.addEventListener("change", (e: Event) => {
  e.preventDefault();

  if (valueProduct !== products.value) {
    quantity.value = "";
    quantityType.value = "";
    textArea.value = "";
  }

  setListMeasures({
    type: products.value,
    select: quantityType,
    list: LIST_MEASURES,
  });
});

quantity.addEventListener("change", (e: Event) => {
  e.preventDefault();
  quantity.style.border = "1px solid rgba(0, 0, 0, 0.6)";
});

quantityType.addEventListener("change", (e: Event) => {
  e.preventDefault();
  quantityType.style.border = "1px solid rgba(0, 0, 0, 0.6)";
});

btn.addEventListener("click", (e: Event) => {
  e.preventDefault();
  setTdTable({
    typology,
    products,
    quantity,
    quantityType,
    textArea,
    table,
  });
  typology.value = "";
  products.value = "";
  quantity.value = "";
  quantityType.value = "";
  textArea.value = "";
});
