//FUNCION toNonEmptyString, PERMITE VALIDAR SI UN STRING NO ESTÁ VACÍO, SI LO ESTÁ LANZA UN ERROR
console.log("Función toNonEmpyString");

function toNonEmptyString(value, label = "Valor") { //value es el dato que se quiere pasar a texto
  const s = String(value).trim(); //trim() elimina los espacios que tenga la cadena
  if (s.length === 0) {
    //si s es igual a 0, es decir no tiene caracteres:
    throw new Error(`El ${label} no puede ser una cadena vacía`); //se lanza este error
  }
  return s;
} // label es el "nombre" opcional del parámetro, sino se envia este por defecto será Valor

////
const nombre = "Ana";
const limpiar = toNonEmptyString(nombre);
if (!limpiar){
  console.log("Error: Nombre no válido");
} else{
  console.log(`¡Hola, ${limpiar}!`);
}

////
const datos = [" Ana ", " Carlos", null, "Luisa "]; 
const resultado = [];  //acá se guardarán los valores válidos y limpios
for (let valor of datos) { //recorre cada elemento del array, cada valor toma un elemento
  const limpio = toNonEmptyString(valor); //Convierte a string y elimina los espacios
if (limpio) { resultado.push(limpio);} } //solamente se agregan estos valores limpios al array nuevo
console.log(resultado);

////
const nom = "Anyi"
const edad = 17
const ciudad = "Bogotá"
if (!nombre || !edad || !ciudad){
  console.log("Error: Los datos ingresados no son válidos")
} else{
  console.log(`Datos válidos: ${nom}, ${edad}, ${ciudad}`)
}

//FUNCION titleCase, PERMITE CONVERTIR STRING A TÍTULO
console.log("Función titleCase");

 export function titleCase(text) {  // "hola mundo" -> "Hola Mundo"
    return text.toLowerCase()// Convertir a minúsculas Hola Mundo -> hola mundo
        .split(' ') // Dividir en palabras hola mundo -> ["hola", "mundo"]
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalizar la primera letra de cada palabra
        .join(' '); // Unir las palabras de nuevo en una cadena
}
console.log(titleCase("primer intento con titlecase"));
////
let libro = "el principito y el aviador";
console.log("Título corregido: " + titleCase(libro));
////
const animales = ["perro feliz", "gato negro", "pez dorado"];
const modificacion = animales.map(titleCase); //array con la primer letra en Mayuscula de cada palabra
console.log(modificacion);

//FUNCION slugify, PERMITE CONVERTIR UN STRING A SLUG EJEMPLO:
// "hola mundo" - "hola-mundo"
console.log("Función slugify");

export function slugify(texto) {
  return texto
  .toLowerCase() //convertir a minúsculas
  .trim() //elimina los espacios al inicio y al final
  .replace(/\s+/g, "-") //reemplaza los espacios por guiones-
  .replace(/[^\w-]/g, "") //elimina caracteres especiales

}

const frase = "Conceptos Básicos de JavaScript"; //elimina la á ya que es un caracter inválido
console.log(slugify(frase)); //elimina la á ya que es un caracter inválido

////
const titulos = ["Aprendiendo JS", "Funciones en JS", "Conceptos de JS"]
const cambios = titulos.map(slugify); //devuelve un array
console.log(cambios);

////
const titulo = "HOLA MUCHACHOS :)";
console.log(slugify(titulo));