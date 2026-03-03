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
