"use strict"; // modo estricto qque ayuda a evitar errores comunes, como variables no declaradas

// 1. CONST (no permite reasignación)
const x = 50;
// x = 100; // Esto causaría error
console.log(x);


// 2. CONST con objeto
const user = { name: "Ana" };
user.name = "Laura";
console.log(user.name);


// 3. LET (permite reasignación)
let y = 5;
y = 15;
console.log(y);


// 4. TYPEOF string
const mensaje = "JavaScript";
console.log(typeof mensaje);


// 5. TYPEOF number
const n = 99;
console.log(typeof n);


// 6. TYPEOF undefined
let sinDato;
console.log(typeof sinDato);


// 7. IF ELSE
const nota = 4;

if (nota >= 3) {
    console.log("Aprobaste");
} else {
    console.log("Reprobaste");
}


// 8. SWITCH
const opcion = 3;

switch (opcion) {
    case 1:
        console.log("lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    default:
        console.log("Otro dia");
}


// 9. FOR básico
for (let i = 1; i <= 3; i++) {
    console.log(i);
}


// 10. FOR con arreglo
const valores = [5, 10, 15];
let suma = 0;

for (let i = 0; i < valores.length; i++) {
    suma += valores[i];
}

console.log(suma);