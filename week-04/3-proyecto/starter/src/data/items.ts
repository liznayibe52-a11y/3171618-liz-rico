// ============================================
// DATOS MOCK
// ============================================
// TODO: Adapta estos datos a tu dominio

import { Item } from '../types';

// TODO: Renombrar y adaptar los datos según tu dominio
export const items: Item[] = [
  {
    id: 1,
    name: 'Espacio A1 - Carro',
    category: 'car',
    price: 5000,
    rating: 4.5,
    isAvailable: true,
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    name: 'Espacio B1 - Moto',
    category: 'motorcycle',
    price: 3000,
    rating: 4.8,
    isAvailable: true,
    createdAt: '2024-02-20',
  },
  {
    id: 3,
    name: 'Espacio C1 - Bicicleta',
    category: 'bicycle',
    price: 1000,
    rating: 4.2,
    isAvailable: false,
    createdAt: '2024-01-10',
  },
  {
    id: 4,
    name: 'Espacio A2 - Carro',
    category: 'car',
    price: 5500,
    rating: 4.9,
    isAvailable: true,
    createdAt: '2024-03-05',
  },
  {
    id: 5,
    name: 'Espacio B2 - Moto',
    category: 'motorcycle',
    price: 2800,
    rating: 4.0,
    isAvailable: true,
    createdAt: '2024-02-15',
  },
  {
    id: 6,
    name: 'Espacio C2 - Bicicleta',
    category: 'bicycle',
    price: 1200,
    rating: 4.6,
    isAvailable: false,
    createdAt: '2024-01-25',
  },
  {
    id: 7,
    name: 'Espacio A3 - Carro',
    category: 'car',
    price: 6000,
    rating: 3.9,
    isAvailable: true,
    createdAt: '2024-03-10',
  },
  {
    id: 8,
    name: 'Espacio B3 - Moto',
    category: 'motorcycle',
    price: 3200,
    rating: 4.7,
    isAvailable: true,
    createdAt: '2024-02-28',
  },
];

// Categorías con etiquetas
// TODO: Adaptar las categorías según tu dominio
export const categories = [
  { value: 'all', label: 'Todos los espacios' },
  { value: 'car', label: '🚗 Carros' },
  { value: 'motorcycle', label: '🏍️ Motos' },
  { value: 'bicycle', label: '🚲 Bicicletas' },
];

// Opciones de ordenamiento
export const sortOptions = [
  { value: 'name-asc', label: 'Nombre (A-Z)' },
  { value: 'name-desc', label: 'Nombre (Z-A)' },
  { value: 'price-asc', label: 'Tarifa (menor a mayor)' },
  { value: 'price-desc', label: 'Tarifa (mayor a menor)' },
  { value: 'rating', label: 'Mejor calificados' },
];