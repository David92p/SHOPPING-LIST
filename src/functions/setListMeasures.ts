import { LIST_MEASURES } from "../data/list_measures.js";
import { Form } from "../interfaces/form.js";

export const setListMeasures = (arg: Form): void => {
  arg.select.innerHTML = "";
  let listMeasures: string[] = [];
  arg.list = LIST_MEASURES;
  if (arg.type != "Latte" && arg.type != "altro") {
    listMeasures = ["g", "kg", "Pz"];
    listMeasures.forEach((el) => {
      let option: HTMLOptionElement = document.createElement("option");
      option.innerText = el;
      arg.select.appendChild(option);
    });
  } else if (arg.type === "Latte") {
    listMeasures = ["ml", "L"];
    listMeasures.forEach((el) => {
      let option: HTMLOptionElement = document.createElement("option");
      option.innerText = el;
      arg.select.appendChild(option);
    });
  } else if (arg.type == "altro") {
    listMeasures = ["g", "kg", "Pz", "ml", "L"];
    listMeasures.forEach((el) => {
      let option: HTMLOptionElement = document.createElement("option");
      option.innerText = el;
      arg.select.appendChild(option);
    });
  }
};
