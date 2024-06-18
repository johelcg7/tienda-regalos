"use strict";

alert("Por favor, lea bien las características del producto y las condiciones de uso");

//Definicion de funcion
function validacionInformacion(pregunta) {
    let respuesta = prompt(pregunta);
    if (respuesta == "") {
        alert("El nombre es necesario para continuar");
        validacionInformacion(pregunta);
        
    } 
    
    if (pregunta == "Válido solo para compras en Lima, ingresa tu dirección") {
        if (respuesta.includes("Lima")) {
            alert("Cobertura válida");
        }
        else {
            alert("Dirección inválida, ingrese otra")
            validacionInformacion(pregunta);
            
        }
    }
    if (pregunta == "Válido solo para compras con Visa, ingresa tu banco") {
        if (respuesta.includes("BCP") || ("BBVA")||("Interbank")||("Scotiabank")) {
            alert("Redirigiéndote al producto...");
        }
        else {
            alert("Banco inválido, ingrese otro")
            validacionInformacion(pregunta);
        }
    }
    return respuesta;
}
//Llamado
let nombreCliente = validacionInformacion("Ingresa tu nombre");
let direccionCliente = validacionInformacion("Válido solo para compras en Lima, ingresa tu dirección");
let bancoCliente = validacionInformacion("Válido solo para compras con Visa, ingresa tu banco");


//Preguntar por qué se almacena la primera info que se pone y que es errada



// function inicio_sesion() {
//     let idCliente = ""; // "" => vacio
//     idCliente = prompt("Coloca tu nombre y/o ID usuario");

    
//     let passCliente = "123456"; // "" => vacio
//     passCliente = prompt("Por favor coloca tu contraseña");
//     if (passCliente!= "123456") { 
//     alert("Contraseña incorrecta, si no está registrado, regístrese")
//     } else {
//         confirm ("Ingresaste correctamente")
//     }

// }
// document.write("Bienvenido "+ idCliente + ", Estamos felices de tener de vuelta.")

// function cantidad(){
//     let cantidadProducto = "";
//     cantidadProducto= prompt("Añada la cantidad");
//     if (cantidadProducto === "0"){
//         alert("Ingrese cantidad mayor a cero")
//     } else {
//         confirm ("Ahora presione añadir a carrito o comprar ahora")
//     }
    
// }

