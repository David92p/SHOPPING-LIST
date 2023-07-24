import { LIST_MEASURES } from "./data/list_measures.js";
import { LIST_PRODUCTS } from "./data/list_products.js";
import { setListMeasures } from "./functions/setListMeasures.js";
import { setListProducts } from "./functions/setListProducts.js";
import { setTdTable } from "./functions/setTdTable.js";
const form = document.querySelector("form");
const typology = document.querySelector("#typology");
const products = document.querySelector("#product");
const quantity = document.querySelector("#quantity");
const quantityType = document.querySelector("#quantityType");
const textArea = document.querySelector("textarea");
const table = document.querySelector("table");
const btn = document.querySelector("button");
let valueTipology = typology.value;
let valueProduct = products.value;
typology.addEventListener("change", (e) => {
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
products.addEventListener("change", (e) => {
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
quantity.addEventListener("change", (e) => {
    e.preventDefault();
    quantity.style.border = "1px solid rgba(0, 0, 0, 0.6)";
});
quantityType.addEventListener("change", (e) => {
    e.preventDefault();
    quantityType.style.border = "1px solid rgba(0, 0, 0, 0.6)";
});
btn.addEventListener("click", (e) => {
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
