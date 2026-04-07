"use strict";

// Funciones setup + validaciones base
function toNumberString(value, label = "valor") {
  const n = Number(value);
  if (!Number.isFinite(n)) {
    throw new Error(`El ${label} debe ser un número`);
  }
  return n;
}

function assertNonNegative(value, label = "Valor") {
  if (value < 0) {
    throw new Error(`El ${label} debe ser un número positivo`);
  }
}

function toNonEmptyString(value, label = "Valor") {
  const s = String(value).trim();
  if (s.length === 0) {
    throw new Error(`El ${label} no puede ser una cadena vacía`);
  }
  return s;
}

// Paso Dataset de ejemplo + normalizacion
function normalizeExpense(raw) {
  const id = toNonEmptyString(raw.id, "ID");
  const fecha = toNonEmptyString(raw.fecha, "FECHA");
  const categoria = toNonEmptyString(raw.categoria, "CATEGORIA");
  const descripcion = toNonEmptyString(raw.descripcion, "DESCRIPCION");
  const monto = toNumberString(raw.monto, "MONTO");
  assertNonNegative(monto, "MONTO");

  return {
    id,
    fecha,
    categoria,
    descripcion,
    monto,
  };
}

const expenses = [
  normalizeExpense({
    id: "e1",
    fecha: "2024-06-01",
    categoria: "Alimentación",
    descripcion: "Compra en el supermercado",
    monto: "850000",
  }),
  normalizeExpense({
    id: "e2",
    fecha: "2024-01-20",
    categoria: "Transporte",
    descripcion: "Pasaje de bus",
    monto: "150000",
  }),
  normalizeExpense({
    id: "e3",
    fecha: "2024-01-25",
    categoria: "Entretenimiento",
    descripcion: "Entrada a cine",
    monto: "500000",
  }),
  normalizeExpense({
    id: "e4",
    fecha: "2024-01-30",
    categoria: "Salud",
    descripcion: "Consulta médica",
    monto: "200000",
  }),
  normalizeExpense({
    id: "e5",
    fecha: "2024-02-05",
    categoria: "Educacion",
    descripcion: "Curso en linea",
    monto: "120000",
  }),
  normalizeExpense({
    id: "e6",
    fecha: "2024-06-30",
    categoria: "Alimentación",
    descripcion: "Venta en el supermercado",
    monto: "700000",
  }),
  normalizeExpense({
    id: "e7",
    fecha: "2024-05-04",
    categoria: "Transporte",
    descripcion: "Pasaje en el taxi",
    monto: "100000",
  }),
  normalizeExpense({
    id: "e8",
    fecha: "2024-07-04",
    categoria: "Entretenimiento",
    descripcion: "Parque de diversion",
    monto: "560000",
  }),
  normalizeExpense({
    id: "e9",
    fecha: "2024-10-09",
    categoria: "Salud",
    descripcion: "Pago hospitalizacion",
    monto: "300000",
  }),
  normalizeExpense({
    id: "e10",
    fecha: "2024-11-05",
    categoria: "Educacion",
    descripcion: "Compra utiles",
    monto: "135000",
  }),
];

// Paso 3 Estadisticas basicas

function calStats(expenses) {
  if (expenses.length === 0) {
    return {
      total: 0,
      promedio: 0,
      maximo: 0,
      minimo: 0,
    };
  }

  const values = expenses.map((e) => e.monto);
  const total = values.reduce((acc, n) => acc + n, 0);
  const minimo = Math.min(...values);
  const maximo = Math.max(...values);
  const promedio = total / values.length;

  return { total, promedio, maximo, minimo };
}

// totales por categoria

function totalByCategory(expenses) {
  return expenses.reduce((acc, e) => {
    acc[e.categoria] = (acc[e.categoria] || 0) + e.monto;
    return acc;
  }, {});
}

// Reporte en consola
function formatCOP(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

function printReport(expenses) {
  const stats = calStats(expenses);
  const byCat = totalByCategory(expenses);

  console.group("REPORTE - ANALIZADOR DE GASTOS");

  console.log("Resumen:");
  console.table([
    {
      Total: formatCOP(stats.total),
      Promedio: formatCOP(stats.promedio),
      Minimo: formatCOP(stats.minimo),
      Maximo: formatCOP(stats.maximo),
      Registros: expenses.length,
    },
  ]);

  console.log("Totales por categoria:");
  console.table(
    Object.entries(byCat).map(([categoria, total]) => ({
      Categoria: categoria,
      Total: formatCOP(total),
    }))
  );

  console.groupEnd();
}

printReport(expenses);

// Gasto más alto
let expenseMayor = expenses[0];

for (let i = 1; i < expenses.length; i++) {
  if (expenses[i].monto > expenseMayor.monto) {
    expenseMayor = expenses[i];
  }
}

console.log("El gasto más alto es:");
console.table(expenseMayor);
{}
// Detalle de los últimos gastos
const ultimosexpenses = expenses.slice(-4);
console.log("Estos son los últimos gastos realizados");
console.table(ultimosexpenses);