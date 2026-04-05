# 🚗 Sistema de Parqueadero - Dashboard React + TypeScript

## 📌 Descripción

Este proyecto consiste en el desarrollo de un dashboard para la gestión de un **parqueadero**, implementado con **React y TypeScript**.

Permite visualizar información clave como:

* 🚗 Vehículos registrados
* 🅿️ Estado de ocupación
* 💰 Tarifas
* ⏱ Datos en tiempo real

El enfoque principal del proyecto es el uso de **hooks**, manejo de estado, efectos secundarios y tipado con TypeScript.

---

## 🧩 Funcionalidades

### ✅ Gestión de vehículos

* Visualización de lista de vehículos
* Información de entrada, tarifa y estado
* Datos simulados (mock)

### 📊 Estadísticas

* Total de vehículos
* Vehículos activos
* Porcentaje de ocupación
* Ingresos estimados

### ⏱ Datos en tiempo real

* Actualización automática mediante polling
* Indicador de ocupación actual

### ⚙️ Manejo de estado

* Estados de loading
* Manejo de errores
* Renderizado condicional

---

## 🛠 Tecnologías utilizadas

* ⚛️ React
* 📘 TypeScript
* ⚡ Vite
* 📡 Fetch API (simulado con datos mock)
* 🎯 Hooks (`useState`, `useEffect`)

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Dashboard.tsx
│   ├── ItemList.tsx
│   ├── StatsCard.tsx
│   └── RealTimeIndicator.tsx
├── types/
│   └── index.ts
├── utils/
│   └── api.ts
├── App.tsx
└── main.tsx
```

---


## 🧠 Conceptos aplicados

* Custom Hooks
* Fetch de datos (simulado)
* Manejo de efectos con `useEffect`
* Polling (actualización automática)
* Tipado fuerte con TypeScript
* Separación de responsabilidades por componentes

---

## 📊 Datos simulados

El proyecto utiliza datos mock para simular:

* Tarifas por tipo de vehículo
* Ocupación del parqueadero

Esto permite probar la lógica sin necesidad de un backend real.

---


## 📌 Estado del proyecto

✅ Funcional
✅ Sin errores de compilación
🚧 Mejoras futuras posibles (UI, backend real, cálculos avanzados)

---
