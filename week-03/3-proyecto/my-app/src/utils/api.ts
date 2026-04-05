// ============================================
// FUNCIONES DE API Y DATOS MOCK
// ============================================
// Implementa funciones para obtener datos de tu dominio

import type { Item, Stats, RealTimeData } from '../types';

// ============================================
// CONFIGURACIÓN
// ============================================

// TODO: Configura la URL base de tu API o usa datos mock
// const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // Cambiar si usas API real

// Helper para simular latencia de red (útil con datos mock)
const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

// ============================================
// DATOS MOCK (EJEMPLO)
// ============================================

const MOCK_ITEMS: Item[] = [
  {
    id: 1,
    name: 'ABC123',
    description: 'Carro',
    entryTime: '08:00',
    rate: 3000,
    status: 'activo',
  },
  {
    id: 2,
    name: 'XYZ789',
    description: 'Moto',
    entryTime: '09:30',
    rate: 1500,
    status: 'activo',
  },
  {
    id: 3,
    name: 'LMN456',
    description: 'Carro',
    entryTime: '07:45',
    exitTime: '10:00',
    rate: 3000,
    status: 'finalizado',
  },
  {
    id: 4,
    name: 'QWE111',
    description: 'Moto',
    entryTime: '10:15',
    rate: 1500,
    status: 'activo',
  },
  {
    id: 5,
    name: 'RTY222',
    description: 'Carro',
    entryTime: '11:00',
    rate: 3000,
    status: 'activo',
  },
];

// ============================================
// FUNCIONES DE FETCH
// ============================================

export const fetchItems = async (signal?: AbortSignal): Promise<Item[]> => {
  await delay(1000);

  if (signal?.aborted) {
    throw new Error('Petición cancelada');
  }

  return MOCK_ITEMS;
};

/**
 * Obtiene estadísticas del dominio
 */
export const fetchStats = async (): Promise<Stats> => {
  await delay(800);

  const total = MOCK_ITEMS.length;
  const active = MOCK_ITEMS.filter((item) => item.status === 'activo').length;
  const capacity = 20; // capacidad del parqueadero
  const percentage = Math.round((active / capacity) * 100);

  // calcular ingresos simples
  const income = MOCK_ITEMS
    .filter((item) => item.status === 'activo')
    .reduce((acc, item) => acc + (item.rate || 0), 0);

  return {
    total,
    active,
    percentage,
    income,
    availableSpots: capacity - active,
  };
};

/**
 * Obtiene datos en tiempo real que se actualizan periódicamente
 */
export const fetchRealTimeData = async (): Promise<RealTimeData> => {
  await delay(500);

  const active = MOCK_ITEMS.filter((item) => item.status === 'activo').length;

  return {
    value: active,
    label: 'Vehículos en el parqueadero',
    unit: 'vehículos',
    lastUpdated: new Date().toISOString(),
  };
};

/**
 * Busca items por query (opcional)
 */
export const searchItems = async (query: string): Promise<Item[]> => {
  await delay(600);

  if (!query.trim()) {
    return MOCK_ITEMS;
  }

  return MOCK_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );
};