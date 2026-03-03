"use strict"; 

 
function validarValor(valor) {
    const numero = Number(valor); 
    // Convierte el valor a número

    if (!Number.isFinite(numero)) { 
        // Si no es un numero finito lanza error
        throw new Error("Valor inválido: debe ser un número finito");
    }

    return numero; 
    // Retorna el numero ya validado
}


 //VALIDA QUE LA UNIDAD ESTE SOPORTADA
 
function validarUnidad(unidad) {
    const unidadesSoportadas = ["c", "f", "k", "m", "km", "cm", "fahrenheit", "celcios", "kelvin", "metros", "kilimetros", "centimetros"];
    // Lista de unidades que el programa acepta

    if (!unidadesSoportadas.includes(unidad.toLowerCase())) {
        // Si la unidad no esta en la lista, lanza error
        throw new Error("Unidad no valida");
    }
}


// LISTA DE CONVERSIONES
// Aquí usamos una lista de objetos

const conversiones = [
    { valor: 100, origen: "km", destino: "Fahrenheit" },
    { valor: 1500, origen: "m", destino: "km" }
];


// FUNCION PRINCIPAL DE CONVERSION
function convertir({ valor, origen, destino }) {

    const numero = validarValor(valor);
    // Primero validamos el valor antes de usarlo

    origen = origen.toLowerCase();
    destino = destino.toLowerCase();

    validarUnidad(origen);
    validarUnidad(destino);
    // Validamos que ambas unidades existan

    const temperatura = ["c", "f", "k", "celsius", "fahrenheit", "kelvin"];
    const longitud = ["m", "km", "cm", "metros", "kilimetros", "centimetros"];
    // Separamos las categorias

    const esTempOrigen = temperatura.includes(origen);
    const esTempDestino = temperatura.includes(destino);
    const esLongOrigen = longitud.includes(origen);
    const esLongDestino = longitud.includes(destino);

    // Verificamos que no se mezclen categorias
    if ((esTempOrigen && esLongDestino) || 
       (esLongOrigen && esTempDestino)) 
    {
        throw new Error("No se pueden mezclar categorias diferentes");
    }

    let resultado;

    // TEMPERATURA
    if (origen === "c" && destino === "f") {
        resultado = (numero * 9/5) + 32;
    }
    else if (origen === "f" && destino === "c") {
        resultado = (numero - 32) * 5/9;
    }
    else if (origen === "c" && destino === "k") {
        resultado = numero + 273.15;
    }
    else if (origen === "k" && destino === "c") {
        resultado = numero - 273.15;
    }

    // LONGITUD
    else if (origen === "m" && destino === "km") {
        resultado = numero / 1000;
    }
    else if (origen === "km" && destino === "m") {
        resultado = numero * 1000;
    }
    else if (origen === "cm" && destino === "m") {
        resultado = numero / 100;
    }
    else if (origen === "m" && destino === "cm") {
        resultado = numero * 100;
    }
    else if (origen === destino) {
        resultado = numero;
    }
    else {
        throw new Error("Conversión no soportada");
    }

    return resultado;
    // Devuelve el resultado final
}


// PROCESAR TODAS LAS CONVERSIONES
// Recorremos la lista con un ciclo for y vamos procesando cada conversión usando la función convertir

for (const item of conversiones) {
    try {
        item.resultado = convertir(item).toFixed(2);
        // Guardamos el resultado dentro del mismo objeto
    } catch (error) {
    item.resultado = error.message;
}
        // Si algo falla no se rompe el programa
    }


console.table(conversiones);
// Muestra todas las conversiones en formato tabla


console.group("Resumen Conversiones");
// Agrupa la información en consola

for (const item of conversiones) {
    console.log(`${item.valor} ${item.origen} → ${item.resultado} ${item.destino}`);
    // Muestra cada conversión en formato resumido
}

console.groupEnd();
// Cierra el grupo en la consola                                                                              