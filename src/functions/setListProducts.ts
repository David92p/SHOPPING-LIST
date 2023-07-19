import { LIST_PRODUCTS } from "../data/list_products.js";
import { Form } from "../interfaces/form.js";

export const setListProducts = (arg: Form): void => {
  if (arg.type == "---------------------") {
    arg.select.setAttribute("disabled", "");
  } else {
    arg.select.removeAttribute("disabled");
  }

  arg.select.innerHTML = "";
  let listProducts: string[] = [];
  arg.list = LIST_PRODUCTS;
  switch (arg.type) {
    case "Pasta - Riso":
      listProducts = arg.list.Pasta_Riso;
      break;
    case "Prodotti Ortofrutticoli":
      listProducts = arg.list.Prodotti_Ortofrutticoli;
      break;
    case "Latticini":
      listProducts = arg.list.Latticini;
      break;
    case "Carne - Affettati":
      listProducts = arg.list.Carne_Affettati;
      break;
    case "Pesce":
      listProducts = arg.list.Pesce;

      console.log(arg.list.Pesce);
      break;
    default:
      listProducts = ["---------------------"];
      break;
  }

  listProducts.forEach((el) => {
    let option: HTMLOptionElement = document.createElement("option");
    option.setAttribute("value", el);
    option.innerText = el.charAt(0).toUpperCase() + el.slice(1);
    arg.select.appendChild(option);
  });
};
