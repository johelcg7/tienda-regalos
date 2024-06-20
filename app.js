"use strict";

alert("Por favor, lea bien las características del producto y las condiciones de uso");

//Definicion de funcion

function validacion_informacion1 (pregunta1){
       
    let respuesta1 = "";
    respuesta1 = prompt(pregunta1);  
    if (respuesta1 == "" || respuesta1 == null) return validacion_informacion1(pregunta1);
    if (pregunta1 == "Válido solo para compras en Lima, ingresa tu dirección" && !respuesta1.includes("Lima")) return validacion_informacion1(pregunta1);
    return respuesta1;
}
    

function validacion_informacion2 (pregunta2){
    
    let respuesta2 = "";
    respuesta2 = prompt(pregunta2);
    if (respuesta2 == "" || !respuesta2.includes("@")) return validacion_informacion2(pregunta2);
    if (pregunta2 == "Válido solo para compras con BCP, ingresa tu banco" && !respuesta2.includes("BCP")) return validacion_informacion2(pregunta2);
    return respuesta2;
    
   
}

// //Llamado
// let nombreCliente = validacion_informacion("Ingresa tu nombre");
// let direccionCliente = validacion_informacion("Válido solo para compras en Lima, ingresa tu dirección");
// let bancoCliente = validacion_informacion("Válido solo para compras con BCP, ingresa tu banco");
// alert("Respuestas válidas. Redirigiéndote al producto...");

// Bucle de Michael

function calificacion() {
    let cantidad = parseInt(prompt("¿Qué calificación de estrellas le darías del 1-5?"));
    if (cantidad == "" || cantidad == null) alert("Debes ingresar un numero")
    for (let index = 1; index <= cantidad; index++) {
        //document.write("<img src='img/logo.png'>");
        let elemento=document.createElement('img');
        elemento.src='https://static8.depositphotos.com/1472772/997/i/450/depositphotos_9977874-stock-photo-golden-star-isolated-over-white.jpg';
        elemento.alt="estrella";
        document.body.appendChild(elemento);
        }
}

// Bucle de Johel


function cantidad(){
    let item = parseInt(prompt("¿Qué cantidad desea?(máximo 7 ítems)"));
    if (item == "" || item == null) alert("Debes ingresar una cantidad.")
    for (let index = 1; index <= item; index++) {
        let elemento2=document.createElement('img');
        elemento2.src='https://fanfun.com.pe/cdn/shop/products/IMCUADRADAFF_20.png?v=1671746004&width=120';
        elemento2.alt="producto";
        document.body.appendChild(elemento2);
    }

}









//Preguntar por qué se almacena la primera info que se pone y que es errada

// function validacionInformacion(pregunta) {
//     let respuesta = prompt(pregunta);
//     if (respuesta == "") {
//         alert("El nombre es necesario para continuar");
//         validacionInformacion(pregunta);    
//     } 
    
    // if (pregunta == "Válido solo para compras en Lima, ingresa tu dirección") {
    //     if (respuesta.includes("Lima")) {
    //         alert("Cobertura válida");
    //     }
    //     else {
    //         alert("Dirección inválida, ingrese otra")
    //         validacionInformacion(pregunta);
            
    //     }
//     // }
//      {
//         if (||("Scotiabank")) {
//             alert("Redirigiéndote al producto...");
//         }
//         else {
//             alert("Banco inválido, ingrese otro")
//             validacionInformacion(pregunta);
//         }
//     }
//     return respuesta;
// }

