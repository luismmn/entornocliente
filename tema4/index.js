
let listadoUsuarios = [];

document.addEventListener("DOMContentLoaded", function () {

  

    let inputNombre = document.getElementById("nombre");
    inputNombre.addEventListener("keyup", validarNombre);

    let inputApellido = document.getElementById("apellido");
    inputApellido.addEventListener("keyup", validarApellido);

    let inputEdad = document.getElementById("edad");
    inputEdad.addEventListener("keyup", validarEdad);

    let inputProfesion = document.getElementById("profesion");
    inputProfesion.addEventListener("click", validarProfesion);

    let inputPolitica = document.getElementById("politica");
    inputPolitica.addEventListener("click", validarPolitica);

    let formulario = document.getElementById("formularioCrearUsuario");
    formulario.addEventListener("submit", validarFormulario);
})


function mostrarUsuarios() {
    
    mostrarUsuariosRefactorizados("listadoUsuarios", listadoUsuarios);
}

function mostrarUsuariosRefactorizados(idDivMostrar, lista) {
    let divListadoUsuarios = document.getElementById(idDivMostrar);
    
    divListadoUsuarios.innerHTML = "";
    let ulUsuarios = document.createElement("ul");
    for (let usuario of lista) {
        let liUsuarios = document.createElement("li");
        liUsuarios.innerHTML = usuario.nombre;
        ulUsuarios.appendChild(liUsuarios);
    }
    divListadoUsuarios.appendChild(ulUsuarios);
}


function validarNombre(event) {
    let esCorrecto = true;
    let inputNombre = document.getElementById("nombre");
    let valor = inputNombre.value;
    let listaErrores = document.getElementById("erroresNombre");
    listaErrores.innerHTML = "";
    inputNombre.classList.remove("inputErroneo");
    inputNombre.classList.remove("inputCorrecto");


   
    if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "solo letras y espacios";
        listaErrores.appendChild(divError);
    }

   

    if (valor.length < 4) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "minimo 3 caracteres";
        listaErrores.appendChild(divError);
    }

    if (valor === "") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "rellenar";
        listaErrores.appendChild(divError);
    }

    if (esCorrecto) {
        inputNombre.classList.add("inputCorrecto");
    } else {
        inputNombre.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarApellido(event) {
    let esCorrecto = true;
    let inputApellido = document.getElementById("apellido");
    let valor = inputApellido.value;
    let inputNombre = document.getElementById("nombre");
    let valor2 = inputNombre.value;

    let listaErrores = document.getElementById("erroresApellido");
    listaErrores.innerHTML = "";
    inputApellido.classList.remove("inputErroneo");
    inputApellido.classList.remove("inputCorrecto");

    

    if (valor.length < 4) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "minimo 3 caracteres";
        listaErrores.appendChild(divError);
    }

    

    if (valor === valor2) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "apellido y nombre son iguales";
        listaErrores.appendChild(divError);
    }


    if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "solo letras y espacios";
        listaErrores.appendChild(divError);
    }



    

    if (valor === "") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "rellenarlo por favor";
        listaErrores.appendChild(divError);
    }

    if (esCorrecto) {
        inputApellido.classList.add("inputCorrecto");
    } else {
        inputApellido.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarEdad() {

    let esCorrecto = true;
    let inputEdad = document.getElementById("edad");
    let valor = inputEdad.value;
    let listaErrores = document.getElementById("erroresEdad");
    listaErrores.innerHTML = "";
    inputEdad.classList.remove("inputErroneo");
    inputEdad.classList.remove("inputCorrecto");


   
    if (!/^[0-9]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "solo numeros";
        listaErrores.appendChild(divError);
    }

    
    if (valor < 18) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "menor de 18";
        listaErrores.appendChild(divError);
    }
    if (esCorrecto) {
        inputEdad.classList.add("inputCorrecto");
    } else {
        inputEdad.classList.add("inputErroneo");
    }
    return esCorrecto;

}

function validarProfesion() {
    let esCorrecto = true;
    let inputProfesion = document.getElementById("profesion");
    let valor = inputProfesion.value;
    let listaErrores = document.getElementById("erroresProfesion");
    listaErrores.innerHTML = "";
    inputProfesion.classList.remove("inputErroneo");
    inputProfesion.classList.remove("inputCorrecto");


    
    if (valor === "ninguna") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO se puede ser LIMPIADOR, PROFESOR, RECEPCIONISTA O ADMINISTRADOR";
        listaErrores.appendChild(divError);
    }

    if (esCorrecto) {
        inputProfesion.classList.add("inputCorrecto");
    } else {
        inputProfesion.classList.add("inputErroneo");
    }
    return esCorrecto;
}



function validarPolitica() {
    let esCorrecto = true;
    let inputPolitica = document.getElementById("politica");
    let valor = inputPolitica.value;
    let listaErrores = document.getElementById("erroresPolitica");
    listaErrores.innerHTML = "";
    inputPolitica.classList.remove("inputErroneo");
    inputPolitica.classList.remove("inputCorrecto");

    if (!inputPolitica.checked) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "aceptar politicas";
        listaErrores.appendChild(divError);

    }

    if (esCorrecto) {
        inputPolitica.classList.add("inputCorrecto");
    } else {
        inputPolitica.classList.add("inputErroneo");
    }
    return esCorrecto;
}


function validarFormulario(event) {
    event.preventDefault();
    let esFormularioCorrecto = false;
    let esCorrectoNombre = validarNombre();
    let esCorrectoApellido = validarApellido();
    let esCorrectoEdad = validarEdad();
    let esCorrectoProfesion = validarProfesion();
    let esCorrectoPolitica = validarPolitica();
    
    if (esCorrectoNombre && esCorrectoApellido && esCorrectoEdad && esCorrectoProfesion && esCorrectoPolitica
    ) {
        esFormularioCorrecto = true;
    }

    if (esFormularioCorrecto) {
        let formulario = event.target;
       
        let usuario = {};
        let nombre = document.getElementById("nombre").value;
        let apellidos = document.getElementById("apellido").value;
        let edad = document.getElementById("edad").value;
        let profesion = document.getElementById("profesion").value;
        let politica = document.getElementById("politica").value;
        usuario.nombre = nombre;
        usuario.apellidos = apellidos;
        usuario.profesion = profesion;
        usuario.edad = edad;
        usuario.politica=politica;
        listadoUsuarios.push(usuario);
        alert("nuevo usuario creado");
        formulario.reset();

        let divNombre = document.getElementById("nombreUsuario");
        divNombre.innerHTML = usuario.nombre;

        let divApellidos = document.getElementById("apellidosUsuario");
        divApellidos.innerHTML = usuario.apellidos;

        let divEdad = document.getElementById("edadUsuario");
        divEdad.innerHTML = usuario.edad;

        let divProfesion = document.getElementById("profesionUsuario");
        divProfesion.innerHTML = usuario.profesion;

        let divPolitica = document.getElementById("politicaUsuario");
        divPolitica.innerHTML = usuario.politica;



    } else {
        alert("datos incorrectos");
    }

}