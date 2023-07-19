import { LIST_MEASURES } from "../data/list_measures.js";
export const setListMeasures = (arg) => {
    arg.select.innerHTML = "";
    let listMeasures = [];
    arg.list = LIST_MEASURES;
    if (arg.type != "Latte") {
        listMeasures = ["g", "kg", "Pz"];
        listMeasures.forEach((el) => {
            let option = document.createElement("option");
            option.innerText = el;
            arg.select.appendChild(option);
        });
    }
    else if (arg.type === "Latte") {
        listMeasures = ["ml", "L"];
        listMeasures.forEach((el) => {
            let option = document.createElement("option");
            option.innerText = el;
            arg.select.appendChild(option);
        });
    }
    else if (arg.type == "altro") {
        listMeasures = ["g", "kg", "Pz", "ml", "L"];
        listMeasures.forEach((el) => {
            let option = document.createElement("option");
            option.innerText = el;
            arg.select.appendChild(option);
        });
    }
};
