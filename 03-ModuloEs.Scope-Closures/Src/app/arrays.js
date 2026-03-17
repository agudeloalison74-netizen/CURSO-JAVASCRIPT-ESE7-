"use strict";

// Sumar todos los elementos
export function sumArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Debe ser un array");
  }

  return arr.reduce((acc, num) => acc + num, 0);
}

// Promedio
export function averageArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Debe ser un array");
  }

  if (arr.length === 0) return 0;

  return sumArray(arr) / arr.length;
}

// Agrupar por propiedad
export function groupArrayBy(arr, prop) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Debe ser un array");
  }

  return arr.reduce((acc, item) => {
    const key = item[prop];

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);
    return acc;
  }, {});
}