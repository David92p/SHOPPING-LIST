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
const btn = document.querySelector("button") as HTMLButtonElement;

let valueTipology = typology.value;
let valueProduct = products.value;

typology.addEventListener("change", (e: Event) => {
  e.preventDefault();
  products.removeAttribute("disabled");
  products.classList.remove("not-allowed");

  quantity.removeAttribute("disabled");
  quantity.classList.remove("not-allowed");

  quantityType.removeAttribute("disabled");
  quantityType.classList.remove("not-allowed");

  textArea.removeAttribute("disabled");
  textArea.classList.remove("not-allowed");
  if (typology.value !== valueTipology) {
    quantity.valueAsNumber = 0;
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
    quantity.valueAsNumber = 0;
    quantityType.value = "";
    textArea.value = "";
  }

  setListMeasures({
    type: products.value,
    select: quantityType,
    list: LIST_MEASURES,
  });
});

btn.addEventListener("click", (e: Event) => {
  e.preventDefault();

  console.log(
    typology.value,
    products.value,
    quantity.valueAsNumber,
    quantityType.value,
    textArea.value
  );
});
