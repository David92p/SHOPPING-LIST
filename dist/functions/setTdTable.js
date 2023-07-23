export const setTdTable = (arg) => {
    console.log(arg);
    if (!arg.typology.value) {
        arg.typology.style.border = "2px solid red";
        alert("Inrerisci una tipologia di prodotto per proseguire");
        // let span = document.createElement("span");
        // span.classList.add("error-type");
        // span.innerText = "Seleziona una tipologia";
        // arg.typology.parentNode?.insertBefore(span, arg.typology);
    }
    else {
        if (!arg.quantity.value) {
            arg.quantity.style.border = "2px solid red";
            alert("Inserisci la quantità");
        }
        if (arg.quantityType.value == "---") {
            arg.quantityType.style.border = "2px solid red";
            alert("Inserisci la tipologia di quantità");
        }
    }
    //   if (arg.typology.value == "Seleziona prodotto") {
    //     arg.typology.style.border = "2px solid red";
    //   } else {
    //     arg.typology.style.border = "1px solid black";
    //   }
    //   return {
    //     typology: "string",
    //     products: "string",
    //     quantity: 5,
    //     quantityType: "string",
    //     textArea: "string",
    //   };
};
