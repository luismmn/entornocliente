<?php
require_once "prueba.php";

$errores = array();
$errores["nombre"] = array();
$errores["version"] = array();
$errores["tamaño"] = array();
$errores["tipo de sistema"] = array();
$errores["terminos"] = array();

if(isset($_POST["nombre"])){
    $errores["nombre"] = validarnombre(trim($_POST["nombre"]));
}

if(isset($_POST["version"])){
    $errores["version"] = validarversion(trim($_POST["version"]),trim($_POST["nombre"]));
}
if(isset($_POST["tamaño"])){
    $errores["tamaño"] = validartamaño(trim($_POST["tamaño"]));
}
if(isset($_POST["tipo de sistema"])){
    $errores["tipo de sistema"] = validartiposistema(trim($_POST["tipo de sistema"]));
}
if(isset($_POST["terminos"])){
    $errores["terminos"] = validarterminos(trim($_POST["terminos"]));
}


echo json_encode($errores, JSON_FORCE_OBJECT);