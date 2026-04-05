// ============================================
// TIPOS E INTERFACES
// ============================================
// Adapta estos tipos a tu dominio asignado

// TODO: Renombrar según tu dominio
// Ejemplos: Book, Medicine, GymClass, Dish, Doctor, Vehicle
export interface Item {
  id: number;
  name: string;
  // TODO: Agregar propiedades de tu dominio
  // Ejemplos:
  // author: string;         // Biblioteca
  // laboratory: string;     // Farmacia
  // instructor: string;     // Gimnasio
  // chef: string;           // Restaurante

  // Tipo de espacio (carro, moto, bicicleta)
  category: Category;

  // Tarifa por uso (por ejemplo, por hora)
  price: number;

  // Calificación del espacio
  rating: number;

  // Disponibilidad del espacio
  isAvailable: boolean;

  // Fecha de creación o registro
  createdAt: string;
}

// Categorías de tu dominio
// TODO: Adaptar las categorías
export type Category = 'all' | 'car' | 'motorcycle' | 'bicycle';
// Ejemplos:
// Biblioteca: 'fiction' | 'non-fiction' | 'science' | 'history'
// Farmacia: 'analgesicos' | 'antibioticos' | 'vitaminas'
// Gimnasio: 'cardio' | 'fuerza' | 'yoga' | 'spinning'

// Opciones de ordenamiento
export type SortOption =
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'
  | 'rating';

// Estado de los filtros
export interface FilterState {
  searchTerm: string;
  category: Category;
  showOnlyAvailable: boolean;
  sortBy: SortOption;
  minPrice?: number;
  maxPrice?: number;
}