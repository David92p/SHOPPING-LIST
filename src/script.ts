import { LIST_MEASURES } from "./data/list_measures.js";
import { LIST_PRODUCTS } from "./data/list_products.js";
import { setListMeasures } from "./functions/setListMeasures.js";
import { setListProducts } from "./functions/setListProducts.js";
import { setTdTable } from "./functions/setTdTable.js";

const form = document.querySelector("form") as HTMLFormElement;
const typology = document.querySelector("#tipologia") as HTMLSelectElement;
const products = document.querySelector("#prodotto") as HTMLSelectElement;
const quantity = document.querySelector("#quantita") as HTMLInputElement;
const quantityType = document.querySelector(
  "#quantityType"
) as HTMLSelectElement;
const textArea = document.querySelector("textarea") as HTMLTextAreaElement;
const btn = document.querySelector("button") as HTMLButtonElement;

typology.addEventListener("change", (e: Event) => {
  e.preventDefault();

  quantity.setAttribute("disabled", "");
  quantityType.setAttribute("disabled", "");
  textArea.setAttribute("disabled", "");

  setListProducts({
    type: typology.value,
    select: products,
    list: LIST_PRODUCTS,
  });

  console.log(products.value);
});

products.addEventListener("change", (e: Event) => {
  e.preventDefault();
  if (products.value == "---------------------") {
    quantity.setAttribute("disabled", "");
    quantityType.setAttribute("disabled", "");
    textArea.setAttribute("disabled", "");
  } else {
    quantity.removeAttribute("disabled");
    quantityType.removeAttribute("disabled");
    textArea.removeAttribute("disabled");
  }

  setListMeasures({
    type: products.value,
    select: quantityType,
    list: LIST_MEASURES,
  });
});

btn.addEventListener("click", (e: Event) => {
  e.preventDefault();
  setTdTable({
    typology,
    products,
    quantity,
    quantityType,
    textArea,
  });
  //   console.log(
  //     typology.value,
  //     products.value,
  //     quantity.valueAsNumber,
  //     quantityType.value,
  //     textArea.value
  //   );
});
