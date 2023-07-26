import { LIST_MEASURES } from "./data/list_measures.js";
import { LIST_PRODUCTS } from "./data/list_products.js";
import { setListMeasures } from "./functions/setListMeasures.js";
import { setListProducts } from "./functions/setListProducts.js";
import { setTdTable } from "./functions/setTdTable.js";
const typology = document.querySelector("#typology");
const products = document.querySelector("#product");
const quantity = document.querySelector("#quantity");
const quantityType = document.querySelector("#quantityType");
const textArea = document.querySelector("textarea");
const table = document.querySelector("table");
const btnSubmit = document.querySelector(".submit");
const btnReset = document.querySelector(".reset-btn");
const tFoot = document.querySelector("tfoot");
let valueTipology = typology.value;
let valueProduct = products.value;
typology.addEventListener("change", (e) => {
    e.preventDefault();
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
quantity.oninput = () => {
    if (quantity.value.length > quantity.maxLength)
        quantity.value = quantity.value.slice(0, quantity.maxLength);
};
quantity.addEventListener("change", (e) => {
    e.preventDefault();
    quantity.style.border = "1px solid rgba(0, 0, 0, 0.6)";
});
quantityType.addEventListener("change", (e) => {
    e.preventDefault();
    quantityType.style.border = "1px solid rgba(0, 0, 0, 0.6)";
});
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    setTdTable({
        typology,
        products,
        quantity,
        quantityType,
        textArea,
        table,
    });
    if (!quantity.value || quantity.value == "0")
        quantity.value = "";
    else if (quantityType.value == "---")
        quantityType.value = "";
    else {
        typology.value = "";
        products.value = "";
        quantity.value = "";
        quantityType.value = "";
        textArea.value = "";
        products.classList.add("not-allowed");
        products.setAttribute("disabled", "");
        quantity.classList.add("not-allowed");
        quantity.setAttribute("disabled", "");
        quantityType.classList.add("not-allowed");
        quantityType.setAttribute("disabled", "");
        textArea.classList.add("not-allowed");
        textArea.setAttribute("disabled", "");
    }
});
btnReset.addEventListener("click", (e) => {
    e.preventDefault();
    while (tFoot === null || tFoot === void 0 ? void 0 : tFoot.firstChild)
        tFoot.removeChild(tFoot.firstChild);
    console.log(tFoot);
});
