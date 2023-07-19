import { LIST_MEASURES } from "./data/list_measures.js";
import { LIST_PRODUCTS } from "./data/list_products.js";
import { setListMeasures } from "./functions/setListMeasures.js";
import { setListProducts } from "./functions/setListProducts.js";

const form = document.querySelector("form") as HTMLFormElement;
const typology = document.querySelector("#tipologia") as HTMLSelectElement;
const products = document.querySelector("#prodotto") as HTMLSelectElement;
const quantity = document.querySelector("#quantita") as HTMLInputElement;
const quantityType = document.querySelector(
  "#quantityType"
) as HTMLSelectElement;
const btn = document.querySelector("button") as HTMLButtonElement;

typology.addEventListener("change", (e: Event) => {
  e.preventDefault();
  setListProducts({
    type: typology.value,
    select: products,
    list: LIST_PRODUCTS
  });
});

products.addEventListener("change", (e: Event) => {
  e.preventDefault();
  setListMeasures({
    type: products.value,
    select: quantityType,
    list: LIST_MEASURES
  });
});

// btn.addEventListener("click", (e: Event) => {
//   e.preventDefault();
//   console.log(
//     typology.value,
//     products.value,
//     quantity.value,
//     quantityType.value
//   );
// });
