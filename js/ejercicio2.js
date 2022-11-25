//1. Crear una funcion que convierta los strings que se ingresan como parametros a estilo capitalizado.
// Ejemplo: "hola a todos" => "Hola A Todos"
 
let frase = "hola a todos" // "Hola a todos"
 
function capitalizar(cadena){ //"hola a todos"
    let array = cadena.split(" ") // ["hola", "a", "todos"]
    let cadenaCapitalizada = []
    for(const index in array){
        cadenaCapitalizada.push((array[index].charAt(0).toUpperCase() + array[index].slice(1))) // h   a   t
    }
    return cadenaCapitalizada.join(" ")
}
 
//2. Dado el siguiente objeto, crear una funcion que verifique si todos los atributos se encuentran llenos.
// En caso no sea asi, que envie una alerta mostrando un mensaje y los atributos que estan vacíos.
// Ejemplo: {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""} => Los campos nombre y profesion se encuentran vacios.
 
let persona = { nombre: "", apellido: "Pacheco", edad: 38, profesion: ""}
 
function verificarYLlenar(objeto) {
    for(const index in objeto) {
        if (objeto[index] === "") {
            objeto[index] = prompt(`El campo ${index} está vacío, por favor llenalo: `)
        }
    }
    return objeto
}
 
//3. Para el ejercicio anterior, crear una funcion que dados los datos pendientes, lance un prompt para que el usuario
// complete los datos faltantes. Debe verificar que el dato ingresado no este vacio y que corresponda al tipo de dato.
 
//4. Te enviaron una base de datos de usuarios:
 
// let users = [
//     {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""},
//     {nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor"},
//     {nombre: "Julia", apellido: "", edad: 32, profesion: "musico"},
//     {nombre: "", apellido: "Martinez", edad: 29, profesion: "programador"},
//     {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: ""},
//     {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
// ]
 
// for(const index in users){
//     verificarYLlenar(users[index])
// }
 
// console.log(users)
 
// let users = [objeto1, objeto2, objeto3, objeto4]
 
 
 
// Te piden que utilizando las funciones de los ejercicios anteriores, evalues que usuarios tienen datos pendientes
// y en caso no existan, solicitar el ingreso de los datos a traves del prompt para completarlos.
 
//5. Crear una funcion que permita ordenar los usuarios por edad de menor a mayor.
 
let users = [
    {nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer"},
    {nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor"},
    {nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico"},
    {nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador"},
    {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef"},
    {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
]
 
for (const index in users){
    nombre=users[index].nombre
    apellido=users[index].apellido
    edad=users[index].edad
    profesion=users[index].profesion
}


//6. Crear una funcion que nos permita escribir los datos de cada usuario en el navegador linea por linea de la siguiente manera:
// Ejemplo: "Andres Soto tiene 28 años y es profesor"
 
//7. Crear una funcion que nos permita ingresar el parametro por el cual se va a ordenar la lista de usuarios y retorne la lista
// ordenada.
 
//8. Crear un boton con javascript que diga "Aceptar" y cuando se le de click mande una alerta que diga: "De acuerdo!"
document.getElementById("root")
const boton=document.createElement("button")
boton.textContent= "ACEPTAR"
root.append(boton)

// boton.addEventListener("click",()=>{
//     alert ("De acuerdo");
// })

// document.querySelector("buttom").addEventListener("click", e => {
   
//   });
//9. Agrega un listener al boton para que cuando el usuario haga hover sobre este, el boton desaparezca.

boton.addEventListener("mouseover",desaparecer);
function desaparecer(){
    boton.style.display="none";
}
 

