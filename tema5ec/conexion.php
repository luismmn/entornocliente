<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 

$modelo=$_POST["nombre"];
$marca=$_POST["version"];
$precio=$_POST["tamaño"];
$capacidad=$_POST["tipo de sistema"];

$conn = mysqli_connect( 'localhost', 'root', '', 'distribuciones');
$sql =  "INSERT INTO `stock`( `nombre`, `version`, `tamaño`,`tipo de sistema`) VALUES ('$nombre','$version',$tamaño,'$tipodesistema')";
$result=mysqli_query($conn,$sql);
?>