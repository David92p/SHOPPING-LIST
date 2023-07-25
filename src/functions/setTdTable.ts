import { TdTable } from "../interfaces/tdTable";

export const setTdTable = (arg: TdTable) => {
  if (!arg.typology.value) {
    arg.typology.style.border = "3px solid red";
    alert("Inrerisci una tipologia di prodotto per proseguire");
  } else {
    if (!arg.quantity.value || arg.quantityType.value == "---") {
      alert("Modifica i campi richiesti");
      if (!arg.quantity.value) arg.quantity.style.border = "3px solid red";
      if (arg.quantityType.value == "---")
        arg.quantityType.style.border = "3px solid red";
    } else {
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

      let checkButton = document.createElement("button") as HTMLButtonElement;
      let checkImg = document.createElement("img") as HTMLImageElement;
      checkImg.src = "./utilities/check.png";
      checkButton.appendChild(checkImg);

      let deleteButton = document.createElement("button") as HTMLButtonElement;
      let deleteImg = document.createElement("img") as HTMLImageElement;
      deleteImg.src = "./utilities/delete.png";
      deleteButton.appendChild(deleteImg);
      tdButton.appendChild(checkButton);
      tdButton.appendChild(deleteButton);

      tr.appendChild(tdTipology);
      tr.appendChild(tdProduct);
      tr.appendChild(tdQuantity);
      tr.appendChild(tdNote);
      tr.appendChild(tdButton);

      arg.table.tFoot?.appendChild(tr);
    }
  }
};
