
function esValidaURL(url) {
    return /^((https|http):\/\/www.+([0-9-A-Z-a-z])+(.es|.com)+\?+([0-9-A-Z-a-z])+=+([0-9]+&+([0-9-A-Z-a-z])+=+([0-9])))$/.test(url);
}

function esValidaPassword(password) {
    
    let alMenosCuatroNumeros = /(.*[0-9]+.*){4,}/g;
    let alMenosCuatroLetras = /(.*[A-Za-z-Ñ-ñ]+.*){4,}/g;
    let unCaraterEspecial = /([^\dA-Z-a-z-Ñ-ñ]+)/g;
    let almenosUnaMayuscula = /(.*[A-Z-Ñ]+.*){1,}/;
    var passOk=false;

    if (password.length >= 9) {
        console.log("longitud minima");
        if (alMenosCuatroNumeros.test(password)) {
            console.log(" almenos 4 numero");
            if (alMenosCuatroLetras.test(password)) {
                console.log("almenos 4 letras ");
                if (unCaraterEspecial.test(password)) {
                    console.log("tiene minimo un caracter especial");
                    if (almenosUnaMayuscula.test(password)) {
                        console.log("una mayuscula almenos");
                        passOk=true;
                        return passOk
                    }       
                }
            }
        }
    }
}


function eliminaCaracteresRaros(texto) {

   
    return /([^a-zA-Z0-9])/.test(texto) ? texto.replace(/[^a-zA-Z0-9]/g, "") : texto
}