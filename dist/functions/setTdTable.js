export const setTdTable = (arg) => {
    var _a;
    if (!arg.typology.value) {
        arg.typology.style.border = "3px solid red";
        alert("Inrerisci una tipologia di prodotto per proseguire");
    }
    else {
        if (!arg.quantity.value ||
            arg.quantity.value == "0" ||
            arg.quantityType.value == "---") {
            alert("Modifica i campi richiesti");
            if (!arg.quantity.value || arg.quantity.value == "0")
                arg.quantity.style.border = "3px solid red";
            if (arg.quantityType.value == "---")
                arg.quantityType.style.border = "3px solid red";
        }
        else {
            let tr = document.createElement("tr");
            let tdTipology = document.createElement("td");
            tdTipology.innerText =
                arg.typology.value.charAt(0).toUpperCase() +
                    arg.typology.value.slice(1);
            let tdProduct = document.createElement("td");
            tdProduct.innerText =
                arg.products.value.charAt(0).toUpperCase() +
                    arg.products.value.slice(1);
            let tdQuantity = document.createElement("td");
            tdQuantity.innerText =
                arg.quantity.value + " - " + arg.quantityType.value;
            let tdNote = document.createElement("td");
            arg.textArea.value === ""
                ? (tdNote.innerText = "Nessuna nota")
                : (tdNote.innerText =
                    arg.textArea.value.charAt(0).toUpperCase() +
                        arg.textArea.value.slice(1));
            let tdButton = document.createElement("td");
            let checkButton = document.createElement("button");
            let deleteButton = document.createElement("button");
            let checkImg = document.createElement("img");
            let deleteImg = document.createElement("img");
            checkImg.src = "./utilities/check.png";
            deleteImg.src = "./utilities/delete.png";
            checkButton.appendChild(checkImg);
            deleteButton.appendChild(deleteImg);
            tdButton.appendChild(checkButton);
            tdButton.appendChild(deleteButton);
            checkButton.addEventListener("click", (e) => {
                e.preventDefault();
                tr.style.background == "azure"
                    ? (tr.style.backgroundImage =
                        "linear-gradient(to right, #38ef7d, #7eed74, #a7ea72, #c5e877, #dde581)")
                    : (tr.style.background = "azure");
            });
            deleteButton.addEventListener("click", (e) => {
                e.preventDefault();
                tr.remove();
            });
            tr.appendChild(tdTipology);
            tr.appendChild(tdProduct);
            tr.appendChild(tdQuantity);
            tr.appendChild(tdNote);
            tr.appendChild(tdButton);
            (_a = arg.table.tFoot) === null || _a === void 0 ? void 0 : _a.appendChild(tr);
            ////////////////////
        }
    }
};
