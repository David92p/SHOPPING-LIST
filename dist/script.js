import { LIST_MEASURES } from "./data/list_measures.js";
import { LIST_PRODUCTS } from "./data/list_products.js";
import { setListMeasures } from "./functions/setListMeasures.js";
import { setListProducts } from "./functions/setListProducts.js";
import { setTdTable } from "./functions/setTdTable.js";
const form = document.querySelector("form");
const typology = document.querySelector("#tipologia");
const products = document.querySelector("#prodotto");
const quantity = document.querySelector("#quantita");
const quantityType = document.querySelector("#quantityType");
const textArea = document.querySelector("textarea");
const btn = document.querySelector("button");
typology.addEventListener("change", (e) => {
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
products.addEventListener("change", (e) => {
    e.preventDefault();
    if (products.value == "---------------------") {
        quantity.setAttribute("disabled", "");
        quantityType.setAttribute("disabled", "");
        textArea.setAttribute("disabled", "");
    }
    else {
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
btn.addEventListener("click", (e) => {
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
