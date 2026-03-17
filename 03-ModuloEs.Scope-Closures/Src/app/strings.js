"use strict";

// Valida que el string no esté vacío
export function toNonEmptyString(str) {
  if (typeof str !== "string" || str.trim() === "") {
    throw new Error("El string está vacío");
  }
  return str;
}

// Convierte a formato Título
export function titleCase(str) {
  toNonEmptyString(str);

  return str
    .toLowerCase()
    .split(" ")
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

// Convierte a slug
export function slugify(str) {
  toNonEmptyString(str);

  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
}