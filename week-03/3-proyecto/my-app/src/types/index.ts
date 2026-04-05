// ============================================
// TIPOS Y INTERFACES DEL PROYECTO
// ============================================
// Adapta estas interfaces a tu dominio asignado

// NOTA PARA EL APRENDIZ:
// Estas interfaces son genéricas. Debes personalizarlas según tu dominio.
// Ejemplos:
// - Biblioteca: Book con { id, title, author, isbn, available }
// - Farmacia: Medicine con { id, name, price, stock, expirationDate }
// - Gimnasio: Member con { id, name, membershipType, joinDate, active }
// - Restaurante: Dish con { id, name, category, price, available }

/**
 * Interfaz principal para elementos de tu dominio
 * TODO: Renombrar y adaptar a tu contexto
 *
 * Ejemplos por dominio:
 * - Book (biblioteca)
 * - Medicine (farmacia)
 * - Member (gimnasio)
 * - Dish (restaurante)
 */
export interface Item {
  id: number;

  // 👇 Adaptado a parqueadero
  name: string; // placa o nombre del vehículo
  description: string; // tipo de vehículo (carro, moto, etc.)

  // TODO: Agregar propiedades específicas de tu dominio
  // Ejemplos:
  // - Biblioteca: author: string, isbn: string, available: boolean
  // - Farmacia: price: number, stock: number, category: string
  // - Gimnasio: membershipType: string, joinDate: string, active: boolean
  // - Restaurante: category: string, price: number, ingredients: string[]

  // 👇 NUEVO (parqueadero)
  entryTime?: string;   // hora de entrada
  exitTime?: string;    // hora de salida
  rate?: number;        // tarifa por hora/día
  status?: 'activo' | 'finalizado'; // estado del vehículo
}

/**
 * Interfaz para estadísticas del dashboard
 * TODO: Adaptar métricas a tu dominio
 *
 * Ejemplos por dominio:
 * - Biblioteca: totalBooks, borrowedToday, availableRooms
 * - Farmacia: totalProducts, dailySales, lowStockItems
 * - Gimnasio: totalMembers, todayAttendance, activeClasses
 * - Restaurante: totalDishes, activeOrders, averageRating
 */
export interface Stats {
  total: number;        // total de vehículos registrados
  active: number;       // vehículos actualmente en el parqueadero
  percentage: number;   // ocupación %

  // TODO: Agregar métricas específicas de tu dominio

  // 👇 NUEVO (parqueadero)
  income?: number;      // ingresos del día
  availableSpots?: number; // cupos disponibles
}

/**
 * Interfaz para datos en tiempo real
 * TODO: Definir qué dato de tu dominio se actualiza en tiempo real
 *
 * Ejemplos por dominio:
 * - Biblioteca: roomOccupancy (ocupación de salas)
 * - Farmacia: pendingOrders (pedidos pendientes)
 * - Gimnasio: currentOccupancy (personas en el gimnasio ahora)
 * - Restaurante: occupiedTables (mesas ocupadas)
 */
export interface RealTimeData {
  value: number;         // cantidad actual (vehículos dentro)
  label: string;         // descripción (ej: "Vehículos en parqueadero")
  unit: string;          // ej: "vehículos"
  lastUpdated: string;   // timestamp de última actualización

  // TODO: Agregar campos adicionales si es necesario
}

/**
 * Estado genérico para manejar peticiones asíncronas
 * No necesitas modificar esta interfaz
 */
export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * Tipo para filtros de búsqueda (opcional)
 * TODO: Agregar filtros relevantes a tu dominio si implementas búsqueda
 */
export interface SearchFilters {
  query: string;

  // TODO: Agregar campos de filtro específicos
  // Ejemplos:
  // - Biblioteca: category: string, available: boolean
  // - Farmacia: priceRange: [number, number], inStock: boolean
  // - Gimnasio: membershipType: string, active: boolean

  type?: 'carro' | 'moto';
  status?: 'activo' | 'finalizado';
}