export const createProducts = (type, select) => {
    const productsList = [];
    select.innerHTML = "";
    switch (type) {
        case "Pasta - Riso":
            productsList.push("spaghetti", "penne", "trenette", "linguine", "gnocchetti sardi", "ditalini", "mezze maniche", "maccheroni", "fusilli", "fusilli bucati", "pappardelle", "orecchiette", "conchiglie", "conchiglioni", "paccheri", "farfalle", "riso carnaroli", "riso arborio", "riso roma", "riso ribe", "riso nero", "riso rosso", "riso integrale", "riso padano", "riso jasmine", "altro");
            break;
        case "Prodotti Ortofrutticoli":
            productsList.push("carciofi", "cavolfiori", "patate", "radicchio", "carote", "zucca", "cicoria", "broccoletti", "barbabietole", "bietole", "cime di rapa", "porro", "sedano", "piselli", "altro");
            break;
        case "Latticini":
            productsList.push("latte", "yogurt", "ricotta", "parmigiano reggiano", "fiocchi di latte", "mozzarella", "grana padano", "pecorino", "caprino", "brie", "altro");
            break;
        case "Carne - Affettati":
            productsList.push("bistecca di manzo", "fettine di vitello", "petto di pollo", "petto di tacchino", "coscia di pollo", "coscia di tacchino", "lonza", "prosciutto cotto", "prosciutto crudo", "bresaola", "mortadella", "speck", "altro");
            break;
        case "Pesce":
            productsList.push("orata", "branzino", "gamberetti", "pesce spada", "vongole", "cozze", "calamari", "altro");
            break;
    }
    productsList.forEach((el) => {
        let option = document.createElement("option");
        option.innerText = el.charAt(0).toUpperCase() + el.slice(1);
        select.appendChild(option);
    });
};
