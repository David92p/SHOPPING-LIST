import { LIST_MEASURES } from "./data/list_measures.js";
import { LIST_PRODUCTS } from "./data/list_products.js";
import { setListMeasures } from "./functions/setListMeasures.js";
import { setListProducts } from "./functions/setListProducts.js";
const form = document.querySelector("form");
const typology = document.querySelector("#tipologia");
const products = document.querySelector("#prodotto");
const quantity = document.querySelector("#quantita");
const quantityType = document.querySelector("#quantityType");
const btn = document.querySelector("button");
typology.addEventListener("change", (e) => {
    e.preventDefault();
    setListProducts({
        type: typology.value,
        select: products,
        list: LIST_PRODUCTS
    });
});
products.addEventListener("change", (e) => {
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
