"use strict"; 
/*
Ejemplos map
*/
//Conversion de precio a Dolares
const precios = [4000, 8000, 12000, 20000];
const dolares = precios.map((pre) => pre / 4000); 
console.log(dolares); 


//conversion de minut6os a segundos
const minutos = [1, 5, 10, 3];
const segundos = minutos.map((min) => min * 60); 
console.log(segundos); 


//precio con descuento 10%
const precio = [50000, 20000, 100000];
const descuento = precio.map((pr) => pr * 0.9); 
console.log(descuento); 


//Edades en 5 años
const edades = [1, 49, 78, 17];
const futuro = edades.map((ed) => ed + 5); 
console.log(futuro); 


//Notas con un punto extra
const notas = [3.0, 1.5, 4.0];
const nvnota = notas.map((not) => not + 0.5); 
console.log(nvnota); 

/*
Ejemplos Filter y Reduce
*/
//  Compras mayores a 25000
const compras = [
  { amount: 10000, product: "camisa" },
  { amount: 25000, product: "pantalones" },
  { amount: 60000, product: "chaquetas" },
];


const numCompras = compras.filter((compras) => compras.amount >= 25000); 
console.log(numCompras);


const totalNumCompras = numCompras.reduce((total, compras) => total + compras.amount, 0);
console.log(totalNumCompras);


// Kilometros recorridos en actividades físicas
const ejercicios = [
  { km: 3, actividad: "caminar" },
  { km: 6, actividad: "correr" },
  { km: 10, actividad: "bicicleta" },
];

const largos = ejercicios.filter((ejercicio) => ejercicio.km >= 5);
console.log(largos);

const totalKm = largos.reduce((total, ejercicio) => total + ejercicio.km, 0);
console.log(totalKm);



// Estudiantes que aprobaron la materia
const estudiantes = [
  { nota: 2.8, nombre: "Maria" },
  { nota: 3.5, nombre: "Carlos" },
  { nota: 4.2, nombre: "Laura" },
];

const aprobados = estudiantes.filter((estudiante) => estudiante.nota >= 3);
console.log(aprobados);

const totalNotas = aprobados.reduce((total, estudiante) => total + estudiante.nota, 0);
console.log(totalNotas);


// Productos en promoción
const productos = [
  { precio: 20000, nombre: "audifonos" },
  { precio: 45000, nombre: "teclado" },
  { precio: 15000, nombre: "mouse" },
];

const promociones = productos.filter((producto) => producto.precio <= 30000);
console.log(promociones);

const totalPromo = promociones.reduce((total, producto) => total + producto.precio, 0);
console.log(totalPromo);


// Empleados con horas extra
const empleados = [
  { horas: 35, nombre: "Sofia" },
  { horas: 45, nombre: "Andres" },
  { horas: 50, nombre: "Camila" },
];

const horasExtra = empleados.filter((empleado) => empleado.horas > 40);
console.log(horasExtra);

const totalHoras = horasExtra.reduce((total, empleado) => total + empleado.horas, 0);
console.log(totalHoras);