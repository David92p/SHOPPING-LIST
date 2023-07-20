import { LIST_MEASURES } from "./data/list_measures.js";
import { LIST_PRODUCTS } from "./data/list_products.js";
import { setListMeasures } from "./functions/setListMeasures.js";
import { setListProducts } from "./functions/setListProducts.js";
const form = document.querySelector("form");
const typology = document.querySelector("#tipologia");
const products = document.querySelector("#product");
const quantity = document.querySelector("#quantity");
const quantityType = document.querySelector("#quantityType");
const textArea = document.querySelector("textarea");
const btn = document.querySelector("button");
typology.addEventListener("change", (e) => {
    e.preventDefault();
    if (typology.value == "Seleziona prodotto") {
        products.setAttribute("disabled", "");
        products.classList.add("not-allowed");
        quantity.valueAsNumber = 0;
        quantityType.value = "";
        textArea.value = "";
    }
    else {
        products.removeAttribute("disabled");
        products.classList.remove("not-allowed");
    }
    quantity.setAttribute("disabled", "");
    quantityType.setAttribute("disabled", "");
    textArea.setAttribute("disabled", "");
    setListProducts({
        type: typology.value,
        select: products,
        list: LIST_PRODUCTS,
    });
});
products.addEventListener("change", (e) => {
    e.preventDefault();
    if (products.value == "Seleziona prodotto") {
        quantity.setAttribute("disabled", "");
        quantityType.setAttribute("disabled", "");
        textArea.setAttribute("disabled", "");
        quantity.classList.add("not-allowed");
        quantityType.classList.add("not-allowed");
        textArea.classList.add("not-allowed");
    }
    else {
        quantity.removeAttribute("disabled");
        quantityType.removeAttribute("disabled");
        textArea.removeAttribute("disabled");
        quantity.classList.remove("not-allowed");
        quantityType.classList.remove("not-allowed");
        textArea.classList.remove("not-allowed");
    }
    quantity.valueAsNumber = 0;
    quantityType.value = "";
    textArea.value = "";
    setListMeasures({
        type: products.value,
        select: quantityType,
        list: LIST_MEASURES,
    });
});
btn.addEventListener("click", (e) => {
    e.preventDefault();
    //   setTdTable({
    //     typology,
    //     products,
    //     quantity,
    //     quantityType,
    //     textArea,
    //   });
    //   typology.value;
    //   products.value;
    //   console.log(
    //     typology.value,
    //     products.value,
    //     quantity.valueAsNumber,
    //     quantityType.value,
    //     textArea.value
    //   );
});
