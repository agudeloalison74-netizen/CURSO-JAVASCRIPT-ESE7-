// calculadiora de presupuestos mensual
// * registra ingresos y gastos
// * calcula totales, balance
// * Determina SUPERAVIT que es el saldo de la cuenta individual de vivienda del trabajador,
//  que se utiliza para financiar la compra de una vivienda, construcción o mejora de la misma,
//  o para pagar una hipoteca relacionada con la vivienda.
//  EQUILIBRADO  y DEFICIT

// REQUISITOS FUNCIONALES
// * Crear listas  Ingresos[] y Gastos[] con objetos {concepto, monto}
// * Validar: monto debe ser numero finito > = 0
// * Calcular: totalIngresos, totalGastos, balance
// * Clasificar eStdo segun balance 
// * Mostrar reporte en consola (TABLA + RESUMEN)

"use strict"; // "use strict" es una directiva que se utiliza en JavaScript para activar el modo estricto, 
// lo que ayuda a prevenir errores comunes y mejora la seguridad del código.
//  Al usar "use strict", se aplican reglas más estrictas en la interpretación del código, 
// lo que puede ayudar a detectar errores de manera más temprana y evitar comportamientos inesperados.

/**
 * CONVIERTE A NUMERO Y VALIDA QUE SEA UN NUMERO FINITO MAYOR O IGUAL A CERO
 * lANZA UN ERROR SI LA VALIDACION FALLA
 */

function validarMonto(monto) {
    const numero = Number(monto); // Convierte el valor a número
    if (!Number.isFinite(numero) || numero < 0) { // SI EL NUMERO NO ES FINITO O ES MENOR QUE CERO, LANZA UN ERROR
        throw new Error("Monto inválido: debe ser un número finito mayor o igual a cero");
    }
    return numero;
} 
// Si el numero es igual a monto entonces primero lo convertimos usando Number()
// Luego preguntamos si es un numero finito o si es menor que cero
// Si alguna de estas condiciones no se cumple, se lanza un error con un mensaje que lo descrive
// Si cumple todas las condiciones, se retorna el numero validado


// MODELAR DATOS DE INGRESOS Y GASTOS
const ingresos = [
    { concepto: "Salario", monto: 5000000 },
    { concepto: "Freelance", monto: 1500000 },
];

// Aquí se esta creando una constante llamada ingresos
// Cada objeto tiene dos cosas el concepto que es de dónde viene el dinero
// y el monto que es la cantidad que se recibe
// Aca ahi dos ingresos, salario y trabajo freelance


const gastos = [
    { concepto: "Alquiler", monto: 1200000 },
    { concepto: "Comida", monto: 800000 },
    { concepto: "Transporte", monto: 300000 },
];

// Aquí se hace lo mismo pero con los gastos
// Se crea una constante llamada gastos
// Cada objeto representa algo en lo que se está gastando dinero
// También tiene concepto y monto
// Aca estaa el alquiler, la comida y el transporte.

// CALCULAR TOTALES

function calcularTotal(items) {
    let total = 0;
    for (const item of items) { // RECORRE CADA ITEM EN LA LISTA DE INGRESOS O GASTOS
        total += validarMonto(item.monto); // VALIDA CADA MONTO ANTES DE SUMARLO AL TOTAL
    }
    return total;
}
// Esta función sirve para sumar todos los montos
// Se crea una variable llamada total que inicia en 0
// Despues se recorre la lista de los items usando un ciclo for
// Y luego se va validando cada monte antes de sumarlo al total usando la función validarMonto
// Finalmente, cuando termina el recorrido, se retorna el total calculado


const totalIngresos = calcularTotal(ingresos); // Aquí se guarda el total de todos los ingresos
const totalGastos = calcularTotal(gastos); // Aquí se guarda el total de todos los gastos
const balance = totalIngresos - totalGastos; // El balance es la diferencia entre lo que entra y lo que sale

// CLASIFICAR ESTADO FINANCIERO

function getEstadoFinanciero(balance) {
    if (balance > 0) {
        return "SUPERAVIT";                                                                  
    } else if (balance === 0) {
        return "EQUILIBRADO";                                                             
    } else {
        return "DEFICIT";
    }
}
// Esta función mira el balance final
// Si el balance es mayor que 0 significa que hay más ingresos que gastos, por lo tanto hay SUPERAVIT
// Si el balance es igual a 0 significa que los ingresos y gastos están equilibrados, por lo tanto hay EQUILIBRADO
// Si el balance es menor que 0 significa que los gastos son mayores que los ingresos, por lo tanto hay DEFICIT


function recomendacion(estado) {
    switch (estado) { 
        case "SUPERAVIT":
            return "¡Buen trabajo! Considera ahorrar o invertir el excedente.";
        case "EQUILIBRADO":
            return "Estás en equilibrio, pero revisa tus gastos para mejorar tu situación.";
        case "DEFICIT":
            return "Revisa tus gastos y busca formas de reducirlos o aumentar tus ingresos.";
        default:
            return ""; 
} 
}
// Esta función recibe el estado financiero
// Se utiliza un switch para evaluar el valor recibido.
// Aquí da una recomndacion dependiendo del estado (SUPERAVIT, EQUILIBRADO o DEFICIT)
// Si no ahi ninguna retorna un switch vacía.

// MOSTRAR REPORTE EN CONSOLA

console.table(ingresos); // Muestra la tabla de ingresos en la consola
console.table(gastos); // Muestra la tabla de gastos en la consola 

console.group ("Resumen Financiero"); // Agrupa la información en la consola para que se vea más ordenada
console.log(`Total Ingresos: ${totalIngresos}`);
console.log(`Total Gastos: ${totalGastos}`);
console.log(`Balance: ${balance}`);
console.log(`Estado Financiero: ${getEstadoFinanciero(balance)}`);
console.log(`Recomendación: ${recomendacion(getEstadoFinanciero(balance))}`);
console.groupEnd(); // Cierra el grupo en la consola

