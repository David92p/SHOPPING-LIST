export const setTdTable = (arg) => {
    var _a;
    if (!arg.typology.value) {
        arg.typology.style.border = "3px solid red";
        alert("Inrerisci una tipologia di prodotto per proseguire");
    }
    else {
        if (!arg.quantity.value || arg.quantityType.value == "---") {
            alert("Inserisci i dati mancanti");
            if (!arg.quantity.value)
                arg.quantity.style.border = "3px solid red";
            if (arg.quantityType.value == "---")
                arg.quantityType.style.border = "3px solid red";
        }
        else {
            console.log(arg);
            let tr = document.createElement("tr");
            let tdTipology = document.createElement("td");
            tdTipology.innerText =
                arg.typology.value.charAt(0).toUpperCase() +
                    arg.typology.value.slice(1);
            let tdProduct = document.createElement("td");
            tdProduct.innerText = arg.products.value;
            let tdQuantity = document.createElement("td");
            tdQuantity.innerText =
                arg.quantity.value + " - " + arg.quantityType.value;
            let tdNote = document.createElement("td");
            tdNote.innerText = arg.textArea.value;
            let tdButton = document.createElement("td");
            let checkButton = document.createElement("button");
            let checkImg = document.createElement("img");
            checkImg.src = "./utilities/check.png";
            checkButton.appendChild(checkImg);
            let deleteButton = document.createElement("button");
            let deleteImg = document.createElement("img");
            deleteImg.src = "./utilities/delete.png";
            deleteButton.appendChild(deleteImg);
            tdButton.appendChild(checkButton);
            tdButton.appendChild(deleteButton);
            tr.appendChild(tdTipology);
            tr.appendChild(tdProduct);
            tr.appendChild(tdQuantity);
            tr.appendChild(tdNote);
            tr.appendChild(tdButton);
            (_a = arg.table.tFoot) === null || _a === void 0 ? void 0 : _a.appendChild(tr);
        }
    }
};
