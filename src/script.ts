import { createProducts } from "./functions/createProducts.js";
import { createQuantity } from "./functions/createQuantity.js";

const form = document.querySelector("form") as HTMLFormElement;
const type = document.querySelector("#tipologia") as HTMLSelectElement;
const products = document.querySelector("#prodotto") as HTMLSelectElement;
const quantity = document.querySelector("#quantita") as HTMLInputElement;
const quantityType = document.querySelector(
  "#quantityType"
) as HTMLSelectElement;
const btn = document.querySelector("button") as HTMLButtonElement;

type.addEventListener("change", (e: Event) => {
  e.preventDefault();
  createProducts(type.value, products);
});

products.addEventListener("change", (e: Event) => {
  e.preventDefault();
  createQuantity(type.value, quantityType, products.value);
  console.log(products.type);
});

btn.addEventListener("click", (e: Event) => {
  e.preventDefault();
  console.log(type.value, products.value, quantity.value, quantityType.value);
});
