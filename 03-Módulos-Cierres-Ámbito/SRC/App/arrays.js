//funcion sumArray, funcion que permite sumar todos los elementos de un array
console.log("Función sumArray");

export function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

////
const numeros = [1, 2, 3, 4, 5];
console.log(sumArray(numeros));

////
const valores = [10, -2, 5, 8];
const positivos = valores.filter(n => n > 0);
console.log(sumArray(positivos));

////
const dato = [-3, -7, 5, 6, -9]
const negativos = dato.filter(n => n < 0);
console.log(sumArray(negativos));

//funcion averageArray, funcion que permite calcular el promedio de todos los elementos de un array
console.log("Función averageArray");

export function averageArray(arr) {
    if (arr.length === 0) return 0;
    const suma = arr.reduce((acc, num) => acc + num, 0);
    return suma / arr.length;
}

////
const notas = [10, 20, 33, 30];
console.log(averageArray(notas));

////
const promedio = averageArray(notas);
console.log("Promedio:", promedio);
if (promedio >= 15) {
    console.log("Felicitaciones, Aprobó")
} else {
    console.log("Lo siento, Reprobró")
}

////
const cifras = [2, 8, 0, 5, 10];
const ceros = cifras.filter(n => n !== 0);
console.log(averageArray(ceros)); //solamente se hace la operacion con datos mayores a 0


// funcion groupArrayBy, funcion que permite agrupar los elementos de un array
//  por una propiedad
console.log("Función groupArrayBy");

export function groupArrayBy(arr, fn) { // fn es la función que define como agrupar
    return arr.reduce((acc, item) => { //item es cada elemento del array
        const key = fn(item); //aplica la funcion para tener la clave del grupo
        if (!acc[key]) acc[key] = []; //si la categoria no existe se crea []
        acc[key].push(item); //agfrega el elemento al grupo correspondiente
        return acc; //devuelve el acumulador actualizado
    }, {});
}

////
const datos = [1, 2, 3, 4, 5, 6];
const separacion = groupArrayBy(numeros, n => n % 2 === 0 ? "pares" : "impares"); 
console.log(separacion); //se crean dos diccionarios nuevos

////
const frutas = ["manzana", "pera", "banano", "anon"]
const grupos = groupArrayBy(frutas, f => f[0]); //para cada fruta tomar el caracter en la posicion 0
console.log(grupos); // groupArrayby crea un array donde las llaves con esas letras y klos valores
//son arrays con las palabras que empiecen con esa letra

////
const personas = [
    { nombre: "Ana", edad: 17},
    { nombre: "Luis", edad: 26},
    { nombre: "Carlos", edad: 20}
];

const seleccion = groupArrayBy(personas, p => p.edad >= 18 ? "mayores" : "menores");
console.log(seleccion);