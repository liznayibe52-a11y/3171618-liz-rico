// ============================================
// COMPONENTE: ItemCard
// ============================================
// Muestra una tarjeta con la información de un elemento
// TODO: Adaptar a tu dominio

import React from 'react';
import { Item } from '../types';

interface ItemCardProps {
  item: Item;
  onDelete?: (id: number) => void;
  onView?: (id: number) => void;
}

/**
 * Tarjeta de elemento del catálogo
 * TODO: Personalizar según tu dominio
 */
export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onDelete,
  onView,
}) => {
  // TODO: Implementar el componente
  // 1. Mostrar nombre del espacio
  // 2. Mostrar tipo de espacio con badge de color
  // 3. Mostrar tarifa formateada
  // 4. Mostrar calificación con estrellas
  // 5. Mostrar estado de disponibilidad (condicional)
  // 6. Botones de acción (ver, eliminar)

  return (
    <div className="item-card">
      <h3>{item.name}</h3>

      {/* Renderizado condicional del badge de categoría */}
      <span className={`badge ${item.category}`}>
        {item.category}
      </span>

      {/* Tarifa */}
      <p className="price">${item.price.toFixed(2)}</p>

      {/* Calificación */}
      <p className="rating">⭐ {item.rating}</p>

      {/* Estado de disponibilidad - Renderizado condicional */}
      {item.isAvailable ? (
        <span className="status available">✅ Espacio disponible</span>
      ) : (
        <span className="status unavailable">❌ Espacio ocupado</span>
      )}

      {/* Acciones */}
      <div className="actions">
        {onView && (
          <button onClick={() => onView(item.id)}>
            Ver espacio
          </button>
        )}
        {onDelete && (
          <button onClick={() => onDelete(item.id)}>
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
};