function objetoXHR() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++) {
            try {
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}
        }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}



function validarnombre() {
    let nombreInput = $("#nombre").val();
    let Input = $("#nombre");
    $.ajax({
            url: "prueba2.php",
            data: { nombre: nombreInput },
            method: "POST",
            dataType: "JSON",
            beforeSend: function() { $("#spinner").css("display", "block"); },
            success: function(text) {
               
                gestionarErrores(Input, text.nombre);
            }
        })
        .fail(function() {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function() {
            $("#spinner").css("display", "none");
        });
}

function validarversion() {
    let inputversion = $("#version").val();
    let inputnombre = $("#nombre").val();
    let Input = $("#version");
    $.ajax({
            url: "prueba2.php",
            data: { version: inputversion, nombre: inputnombre },
            method: "POST",
            dataType: "JSON",
            beforeSend: function() { $("#spinner").css("display", "block"); },
            success: function(text) {
                gestionarErrores(Input, text.version
                    
                    
                    );
            }
        })
        .fail(function() {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function() {
            $("#spinner").css("display", "none");
        });
}

function validartamaño() {
    let inputtamaño = $("#tamaño").val();
    let Input = $("#tamaño");
    $.ajax({
            url: "prueba2.php",
            data: { tamaño: inputtamaño },
            method: "POST",
            dataType: "JSON",
            beforeSend: function() { $("#spinner").css("display", "block"); },
            success: function(text) {
                gestionarErrores(Input, text.tamaño);
            }
        })
        .fail(function() {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function() {
            $("#spinner").css("display", "none");
        });
}

function validartipodesistema() {
    let inputtipodesistema = $("#tipodesistema").val();
    let Input = $("#tipodesistema");
    $.ajax({
            url: "prueba2.php",
            data: { tipodesistema: inputtipodesistema },
            method: "POST",
            dataType: "JSON",
            beforeSend: function() { $("#spinner").css("display", "block"); },
            success: function(text) {
                gestionarErrores(Input, text.tipodesistema);
            }
        })
        .fail(function() {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function() {
            $("#spinner").css("display", "none");
        });
}

function validarTerminos() {
    let inputterminos = $("#terminos:checked").val();
    let Input = $("#terminos")
    $.ajax({
            url: "prueba2.php",
            data: { terminos: inputterminos },
            method: "POST",
            dataType: "JSON",
            beforeSend: function() { $("#spinner").css("display", "block"); },
            success: function(text) {
                gestionarErrores(Input, text.terminos);
            }
        })
        .fail(function() {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function() {
            $("#spinner").css("display", "none");
        });
}

function validarFormulario() {
    event.preventDefault();
    validacionFormularioAjax();
}

function validacionFormularioAjax() {
    let inputnombre = $("#nombre");
    let inputversion = $("#version");
    let inputtamaño = $("#tamaño");
    let inputtipodesistema = $("#tipodesistema");
    let inputterminos = $("#terminos:checked");
    $.ajax({
            url: "prueba2.php",
            data: { nombre: inputnombre.val(), version: inputversion.val(), tamaño: inputtamaño.val(), tipodesistema: inputtipodesistema.val(), terminos: inputterminos.val() },
            method: "POST",
            dataType: "JSON",
            beforeSend: function() { $("#spinner").css("display", "block"); },
            success: function(text) {
                gestionarErrores(inputnombre, text.nombre);
                gestionarErrores(inputversion, text.version);

                gestionarErrores(inputtamaño, text.tamaño);
                gestionarErrores(inputtipodesistema, text.tipodesistema);

                gestionarErrores(inputterminos, text.terminos);

                if (gestionarErrores(inputnombre, text.nombre) === false && gestionarErrores(inputversion, text.version) === false &&
                    gestionarErrores(inputtamaño, text.tamaño) === false && gestionarErrores(inputtipodesistema, text.tipodesistema) === false &&
                    gestionarErrores(inputterminos, text.terminos) === false) {
                    $.ajax({
                        url: "prueba3.php",
                        data: { nombre: inputnombre.val(), version: inputversion.val(), tamaño: inputtamaño.val(), tipodesistema: inputtipodesistema.val(), terminos: inputterminos.val() },
                        method: "POST",
                        dataType: "JSON",
                    });
                    $("#resultado").html("Se ha creado correctamente");
                }

            }
        })
        .fail(function() {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function() {
            $("#spinner").css("display", "none");
        });
}


function gestionarErrores(input, errores) {
    var hayErrores = false;
    let divErrores = input.next();
    divErrores.html("");
    input.removeClass("bg-success bg-danger");
    if (Object.keys(errores).length === 0) {
        input.addClass("bg-success");
    } else {
        hayErrores = true;
        input.addClass("bg-danger");
        for (let i = 0; Object.keys(errores).length > i; i++) {
            divErrores.append("<div>" + errores[i] + "</div>");
        }
    }
    input.parent().next().remove();
    return hayErrores;
}

function incluirSpinner(input) {
    if (input.parent().next().length === 0) {
        let spin = $(".spinner").first().clone(true);
        input.parent().after(spin);
        spin.show();
    }
}