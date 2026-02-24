"use strict"; // modo estricto qque ayuda a evitar errores comunes, como variables no declaradas

// 1. CONST (no permite reasignación)
const a = 50;
// a = 100; // Esto causaría error
console.log(a);


// 2. CONST con objeto
const user = { name: "Ana" };
user.name = "Laura";
console.log(user.name);


// 3. LET (permite reasignación)
let f = 5;
f = 15;
console.log(f);


// 4. TYPEOF string
const mensaje = "JavaScript";
console.log(typeof mensaje);


// 5. TYPEOF number
const num = 99;
console.log(typeof num);


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



//Apuntes calse pasada

// A. tipos de datos  typeof

// string, number, boolean, null, undefined, symbol, bigint

// no primitivos: object, array, function

"use strict"; // modo estricto qque ayuda a evitar errores comunes, como variables no declaradas

const s = "hola mundo"; // string
const n = 42; // number
const b = true;
let u; // undefined valor no asignado
const nu = null; // null valor intencionalmente vacío
const big = 9007199254740991n; // bigint para números enteros grandes
const sym = Symbol("id"); // símbolo para identificadores únicos

console.log(typeof s); // string
console.log(typeof n); // number
console.log(typeof b); // boolean
console.log(typeof u); // undefined
console.log(typeof nu); // object (null es un caso especial de objeto)
console.log(typeof big); // bigint
console.log(typeof sym); // symbol
 
//correro cofigo usando  extension code runner en vscode ctrl + alt + n  
// usa null cuando quieres decir no "hay valor" y undefined cuando quieres decir "valor no asignado"

//B. let vs const (y porque evitar var)

// const 
// No permite reassingacion de valor, es decir, no puedes cambiar el valor de una variable declarada con const después de haberla asignado.
// Sin embargo, si el valor es un objeto o un array, puedes modificar sus propiedades o elementos

const x = 10;
// x = 20; // Esto causará un error porque x es una constante

const obj = { name: "Alice" };
obj.name = "Bob"; // Esto es permitido, ya que estamos modificando una propiedad del objeto, no reasignando la variable obj

// let // Permite reasignación de valor, es decir, puedes cambiar el valor de una variable declarada con let después de haberla asignado.

let y = 10;
y = 20; // Esto es permitido porque let permite reasignación

// // porque evitar var
// var tiene un alcance de función, lo que significa que si declaras una variable con var dentro de una función, esa variable es accesible en toda la función, incluso antes de su declaración debido al hoisting. Esto puede llevar a errores difíciles de depurar.

function demo() {
    if(true) {
        var z = 30; // z es accesible en toda la función demo, incluso antes de esta línea
    }
    console.log(z); // Esto funcionará y mostrará 30, lo que puede ser confuso

}//llamamos demo
demo();

// usa const por  defecto
// usa let cuando necesites reasignar un valor

// C. Converion de tipos(corercion) vs conversion explicita

// coercion de tipos (conversion implicita)
// JavaScript convierte automáticamente los tipos de datos cuando es necesario, lo que puede llevar a resultados inesperados.

console.log("5" + 3); // "53" (coercion a string)
console.log("5" - 3); // 2 (coercion a number)
console.log(true + 1); // boolean (true)

// conversion explicita
// Puedes convertir tipos de datos manualmente usando funciones como Number(), String(), Boolean(), etc.

const input = "12.5";
const numb = Number(input); //convierte el string a un número

const number = 42;
const str = String(number); // convierte el número a un string

console.log(numb); // 12.5
console.log(str); // "42"

// operadores claves

// 1) === VS ==
// === compara tanto el valor como el tipo de datos, mientras que 
// == compara solo el valor después de realizar coercion de tipos si es necesario.

console.log(5 === "5"); // false (diferente tipo)
console.log(5 == "5"); // true (coercion a number)

// siempre usar  === para evitar errores de comparación debido a coercion de tipos inesperada.
// USO !== para comparar desigualdad estricta, que también compara tanto el valor como el tipo de datos.

// 2) && VS || ?? 
// && (AND lógico) devuelve el primer valor falsy o el último valor si todos son truthy

// V  V= V    V F = F   F F = F 
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false   

// || (OR lógico) devuelve el primer valor truthy o el último valor si todos son falsy
// V  V= V    V F = V   F F = F
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false   

// ?? (Nullish coalescing) devuelve el primer valor que no sea null o undefined
const d = null;

const c = "default";
console.log(a ?? c); // "default" (a es null)

// ?? es útil para proporcionar un valor predeterminado solo cuando el valor es null o undefined,
//  a diferencia de || que considera falsy (como 0, "", false) como valores que también activan el valor predeterminado.

console.log(0 || "default"); // "default" (0 es falsy)