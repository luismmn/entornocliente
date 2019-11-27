
function obtenerNuevaFrase(frase, trozoPalabra) {
    frase = frase.toLowerCase();
    let nuevaFrase = "";
    separador = " ", 
        palabras = frase.split(separador);

    for (let i = 0; i < palabras.length; i++) {
        let trocito = palabras[i]


        if ((palabras[i].includes(trozoPalabra)) === true) {
            if (palabras[i].startsWith(trozoPalabra)) {


            } else {
                if (palabras[i].endsWith(trozoPalabra)) {

                } else {

                    nuevaFrase += palabras[i] + " ";
            
                }
            }
        }
    }
    return nuevaFrase.trim();
}

function sumaDePosiciones(frase, trozoPalabra) {
    let fraseMin = frase.toLowerCase()
    let sumaPos = 0;
    let largoRecortado = frase.length;

    if (fraseMin.includes(trozoPalabra)) {

        sumaPos += fraseMin.lastIndexOf(trozoPalabra);

        sumaPos += fraseMin.indexOf(trozoPalabra);

    } else {
        console.log("No esta incluido");
    }
    return sumaPos;
}

function esValidoFormatoRGB(color) {
    let ok = false;
    let colorMin = color.toLowerCase();
    let arrayPermitido = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "#"];

    if (colorMin.indexOf("#") === 0 && ((colorMin.length === 7) || (colorMin.length === 4))) {

        for (let i = 0; i < arrayPermitido.length; i++) {

            if (colorMin.includes(arrayPermitido[i])) {
                ok = true;
            }
        }
    }
    return ok;
}

function esValidaURL(url) {
    let ok = false;
    arrayUrl = url.split(".");
    if (arrayUrl.length > 2) {
        if (url.startsWith("http://www.") || url.startsWith("https://www.")) {
            if (arrayUrl[2].startsWith("com") || arrayUrl[2].startsWith("es")) {
                if (arrayUrl[2].includes("&") === true) {
                    resultado = true;
                }
            }
        }
    }
    return ok;
}