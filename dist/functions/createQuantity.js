export const createQuantity = (type, select, t) => {
    select.innerHTML = "";
    if (type == "Pasta - Riso" ||
        type == "Prodotti Ortofrutticoli" ||
        type == "Carne - Affettati" ||
        type == "Pesce" ||
        (type == "Latticini" && t != "Latte")) {
        let options = ["g", "kg", "Pz"];
        options.forEach((opt) => {
            let option = document.createElement("option");
            option.innerText = opt;
            select.appendChild(option);
        });
    }
    else if (type == "Latticini" && t === "Latte") {
        let options = ["ml", "L"];
        options.forEach((opt) => {
            let option = document.createElement("option");
            option.innerText = opt;
            select.appendChild(option);
        });
    }
};
