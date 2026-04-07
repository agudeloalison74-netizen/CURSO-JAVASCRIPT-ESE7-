// formas de declarar funciones en javascript

function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 3)); // Imprime 8

const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(5, 3)); // Imprime 15

const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max); // clamp a un rango entre min y max
};
console.log(clamp(10, 0, 5)); // Imprime 5 (clamp a 5)

// Parametros por defecto, rest y guard clauses

function greet(name = "Invitado") {
  if (!name.trim())
    // trim elimina espacios en blanco al inicio y al final de la cadena
    return "Hola, Invitado!";
  return `Hola, ${name}!`;
}

console.log(greet()); // Imprime "Hola, Invitado!"
console.log(greet("Alice"));

// Arrays y metodos claves

const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map((num) => num * 2); // map crea un nuevo array con los resultados de la función aplicada a cada elemento
console.log(cuadrados); // Imprime [1, 4, 9, 16, 25]

const expenses = [
  { amount: 50, category: "food" },
  { amount: 20, category: "transport" },
  { amount: 30, category: "food" },
];
// filter 

const foodExpenses = expenses.filter((expense) => expense.category === "food"); 
// filter crea un nuevo array con los elementos que cumplen la condición
console.log(foodExpenses); 
// Imprime [{ amount: 50, category: "food" }, { amount: 30, category: "food" }]

const totalFoodExpense = foodExpenses.reduce((total, expense) => total + expense.amount, 0);
// reduce acumula un valor a través de los elementos del array, en este caso 
// sumando los montos de los gastos de comida
console.log(totalFoodExpense); // Imprime 80

// map, filter, reduce son métodos muy poderosos para trabajar con arrays 
// de manera funcional y evitar mutaciones.
// ejemplo de map y filter juntos
const numbers = [1, 2, 3, 4, 5];
const evenSquares = numbers
  .filter((num) => num % 2 === 0) // Filtra los números pares
  .map((num) => num * num); // Luego mapea esos números al cuadrado
console.log(evenSquares); // Imprime [4, 16]


/**
 * EJEMPLOS ARRAYS Y MÉTODOS CLAVES
 * EJEMPLOS DE MAP
 */
// 1.
const precios = [1000, 2000, 3000]; //Defino el array precios
const IVA = precios.map((precio) => precio * 1.19); // El map va producto por producto y le suma el IVA
//Convierto los precios anteriores a preios con el valor del IVA
console.log(IVA);

//2.
const usuarios = [ 
    {nombre: "Ana", edad: 17}, 
    {nombre: "Eileen", edad: 16}, 
    {nombre: "Andrea", edad: 17}
];
const nombres = usuarios.map( usuario => usuario.nombre);
console.log(nombres);
// El map va usuario por usuario y solamente selecciona la clave nombre

//3.
const edades = usuarios.map(usuario => usuario.edad);
console.log(edades);
// El map va usuario por usuario y solamente selecciona la clave edad

//4.
const notas = [ 3.0, 4.1, 5.0, 2.9];
const resultados = notas.map(nota => nota >=3 ? "Aprobó" : "Reprobó" ) ; //operador ternario ? condicion
console.log(resultados);

//5.
const horas = [1, 2, 3, 4, 5, 6];
const minutos = horas.map(hora => hora * 60);
console.log(minutos);

// EJEMPLOS DE FILTER
// 1.
const costos = [ 5000, 6000, 10000, 200];
const baratos = costos.filter( costo => costo < 10000); //Filtra los números menores a 10000
console.log(baratos);

//REDUCE 1.
const gastos = costos.reduce((total, costo) => total + costo, 0);
console.log(gastos) // suma los numeros del array dando como resultado 21200

// 2.
const prendas = [
  { precio: 100000, categoria: "deportiva" },
  { precio: 60000, categoria: "casual" },
  { precio: 150000, categoria: "elegante" },
  { precio: 90000, categoria: "deportiva" },
  { precio: 200000, categoria: "casual" },
  { precio: 180000, categoria: "elegante" }
];
const prendasDeportivas = prendas.filter((prenda) => prenda.categoria === "deportiva");
console.log(prendasDeportivas);

// REDUCE 2.
const sumaPrendasDeportivas = prendasDeportivas.reduce((total, prenda) => total + prenda.precio, 0);
console.log(sumaPrendasDeportivas);

//FILTRO 3.
const prendasCasuales = prendas.filter((prenda) => prenda.categoria === "casual");
console.log(prendasCasuales);

// REDUCE 3.
const sumaPrendasCasuales = prendasCasuales.reduce((total, prenda) => total + prenda.precio, 0);
console.log(sumaPrendasCasuales);

//FILTRO 4.
const prendasElegantes =prendas.filter((prenda) => prenda.categoria === "elegante");
console.log(prendasElegantes);

//REDUCE 4.
const sumaPrendasElegantes = prendasElegantes.reduce((total , prenda) => total + prenda.precio, 0);
console.log(sumaPrendasElegantes);

//FILTRO 5.
const datos = [
  {estuadiante: "Felipe", calificacion: 2.5},
  {estuadiante: "Juana", calificacion: 3.5},
  {estuadiante: "Felipe", calificacion: 4.0},
  {estuadiante: "Juana", calificacion: 3.0},
  {estuadiante: "Felipe", calificacion: 3.8},
  {estuadiante: "Juana", calificacion: 2.9},
];

const calificacion = datos.filter((dato) => dato.estuadiante === "Felipe");
console.log(calificacion);

//REDUCE 5.
const suma = calificacion.reduce((total, dato) => total + dato.calificacion, 0) / calificacion.length;
console.log(suma);
// .length propiedad que dice la cantidad de elementos que hay dentro del array
// en este caso 3 elementos en el array de calificacion 