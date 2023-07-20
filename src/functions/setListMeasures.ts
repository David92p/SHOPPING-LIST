import { LIST_MEASURES } from "../data/list_measures.js";
import { Form } from "../interfaces/form.js";

export const setListMeasures = (arg: Form): void => {
  arg.select.innerHTML = "";
  let listMeasures: string[] = [];
  arg.list = LIST_MEASURES;

  if (arg.type != "latte" && arg.type != "altro") {
    listMeasures = ["g", "kg", "Pz"];
  } else if (arg.type === "latte") {
    listMeasures = ["ml", "L"];
  } else if (arg.type == "altro") {
    listMeasures = ["g", "kg", "Pz", "ml", "L"];
  }
  listMeasures.forEach((el) => {
    let option: HTMLOptionElement = document.createElement("option");
    option.innerText = el;
    arg.select.appendChild(option);
  });
};
