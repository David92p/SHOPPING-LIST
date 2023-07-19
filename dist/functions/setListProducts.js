import { LIST_PRODUCTS } from "../data/list_products.js";
export let setListProducts = (arg) => {
    arg.select.innerHTML = "";
    let listProducts = [];
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
            break;
    }
    listProducts.forEach((el) => {
        let option = document.createElement("option");
        option.innerText = el.charAt(0).toUpperCase() + el.slice(1);
        arg.select.appendChild(option);
    });
};
