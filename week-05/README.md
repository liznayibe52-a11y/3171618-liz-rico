# 🚗 Sistema de Parqueadero - Configuración UI

## 📌 Descripción

Este proyecto consiste en el desarrollo de una aplicación en **React con TypeScript** donde se implementa un sistema de configuración de interfaz de usuario utilizando:

* Context API
* useReducer
* Compound Components

El dominio asignado es un **sistema de parqueadero**, donde se gestionan cupos y vehículos.

---

## ⚙️ Funcionalidades

* 🔧 Configuración global (tema, tamaño de texto, densidad)
* 💾 Persistencia de datos con localStorage
* 🧩 Componentes reutilizables (Card, Form)
* 🎨 Cambio de tema (claro / oscuro)
* 🚗 Visualización de cupos del parqueadero
* 🔔 Configuración de notificaciones

---

## 🧱 Tecnologías usadas

* React
* TypeScript
* Vite
* Context API
* useReducer

---

## 📁 Estructura del proyecto

```
src/
│
├── components/
│   ├── Card/
│   ├── Form/
│   ├── Layout/
│   └── SettingsPanel/
│
├── contexts/
│   └── ConfigContext.tsx
│
├── hooks/
│   └── useLocalStorage.ts
│
└── App.tsx
```

---

## 🚀 Ejecución del proyecto

1. Clonar el repositorio

```
git clone <url-del-repo>
```

2. Instalar dependencias

```
pnpm install
```

3. Ejecutar el proyecto

```
pnpm dev
```

---

## 🧠 Conceptos aplicados

* Uso de Context API para manejo de estado global
* Implementación de useReducer para lógica de estado
* Creación de Compound Components para reutilización
* Separación de responsabilidades en componentes
* Persistencia con localStorage
