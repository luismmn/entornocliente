let animal1 = {nombre:"Thor",especie:"Perro",raza:"caniche",vida:5};
let animal2 = {nombre:"Capitan America",especie:"Gato",raza:"siames",vida:8};
let animal3 = {nombre:"Viuda Negra",especie:"Perro",raza:"bulldog",vida:15};
let animal4 = {nombre:"Hulk",especie:"Perro",raza:"pastor aleman",vida:12};
let animal5 = {nombre:"Ojo de Halcon",especie:"Perro",raza:"san bernardo",vida:9};
let animal6 = {nombre:"Loky",especie:"Perro",raza:"salchicha",vida:4};
let animal7 = {nombre:"Iron Man",especie:"Conejo",raza:"pascuas",vida:9};
let animal8 = {nombre:"WarMachine",especie:"Perro",raza:"raton de praga",vida:20};
let animal9 = {nombre:"Vision",especie:"Perro",raza:"pastor belga",vida:12};
let animal10 = {nombre:"Mercurio",especie:"Pajaro",raza:"loro",vida:15};

let listadoAnimales = [animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10];
document.addEventListener("DOMContentLoaded",function(){
    let boton = document.getElementById("mostrarAnimales")
    boton.addEventListener("click", mostrarAnimales);

})
function mostrarAnimales(){
    let  divListadoAnimales = document.getElementById("listadoAnimales");
    divListadoAnimales.innerHTML="";
    let ulAnimales = document.createElement("ul");
    for(let animal of listadoAnimales){
        let liAnimal = document.createElement("li");
        liAnimal.innerHTML = animal.nombre;
        ulAnimales.appendChild(liAnimal);
    }
    divListadoAnimales.appendChild(ulAnimales);
}
function mostrarAnimalesFiltrados(){
    let selectEspecie = document.getElementById("esp");
    selectEspecie.addEventListener("change", mostrarAnimalesFiltrados);
    let especieSeleccionada = selectEspecie.nodeValue;
    let especieSfiltradas = filtrarporespecies(especieSeleccionada);
}
function filtrarporespecies(especie){
    return listadoanimeles.filter( x=> x.especie === especie.toLocaleLowerCase());



}
//if(!/^[a-ZA-Z]+$/.test(valor)){
    esCorrecto = false;
    let divError = document.createElement("div");
    divError.innerHTML = "solo deben usarse letras";
    listaErrores 
}