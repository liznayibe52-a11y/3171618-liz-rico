import React, { useState, useEffect } from 'react';
import type { Item } from '../types';
import { fetchItems } from '../utils/api';

// ============================================
// COMPONENTE: ItemList
// Muestra la lista principal de elementos del dominio
// ============================================

// NOTA PARA EL APRENDIZ:
// Este componente debe:
// 1. Cargar datos al montar usando useEffect
// 2. Manejar estados: loading, error, data
// 3. Usar AbortController para cancelación
// 4. Mostrar los items en una lista
// 5. Renderizado condicional según el estado

export const ItemList: React.FC = () => {
  // TODO: 1. Definir estados para data, loading, error
  // Ejemplo:
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // TODO: 2. Implementar useEffect para fetch de datos
  useEffect(() => {
    // 2.1. Crear AbortController
    const controller = new AbortController();

    // 2.2. Función async para fetch
    const loadItems = async () => {
      try {
        setLoading(true);
        setError(null);
         const data = await fetchItems(controller.signal);
        setItems(data);
      } catch (err) {
        if (err instanceof Error && err.message === 'Petición cancelada') return;
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    // 2.3. Llamar función de fetch
    loadItems();

    // 2.4. Cleanup: cancelar petición al desmontar
    return () => {
      controller.abort();
    };
  }, []); // Array vacío: solo al montar

  // TODO: 3. Renderizado condicional para loading
  if (loading) {
    return (
      <div className="item-list">
        <h2>Cargando vehículos...</h2>
      </div>
    );
  }

  // TODO: 4. Renderizado condicional para error
  if (error) {
    return (
      <div className="item-list error">
        <h2>Error al cargar vehículos</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Reintentar
        </button>
      </div>
    );
  }

  // TODO: 5. Renderizado principal: lista de items
  return (
    <div className="item-list">
      <h2>Vehículos en el Parqueadero 🚗</h2>
      {/* TODO: Cambiar título según tu dominio */}
      {/* Ejemplos: "Lista de Libros", "Inventario", "Miembros", "Menú" */}

      <p className="item-count">
        Total: {items.length} vehículos
        {/* TODO: Mostrar cantidad de items */}
        {/* Ejemplo: Total: {items.length} libros */}
      </p>

      <ul className="items">
        {/* TODO: Mapear items y renderizar cada uno */}
        {items.map((item) => (
          <li key={item.id} className="item-card">
            <h3>🚗 {item.name}</h3>
            <p>{item.description}</p>

            {/* TODO: Mostrar propiedades específicas de tu dominio */}
            {/* Ejemplo parqueadero */}
            <p>⏱ Tiempo: {item.entryTime || 'N/A'}</p>
            <p>💰 Tarifa: {item.rate || 'N/A'}</p>
          </li>
        ))}
      </ul>

      {/* TODO: (Opcional) Agregar búsqueda/filtrado */}
      {/* <input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => handleSearch(e.target.value)}
      /> */}
    </div>
  );
};

// ============================================
// ESTILOS SUGERIDOS (CSS inline o archivo separado)
// ============================================

// .item-list {
//   padding: 20px;
//   background: #f5f5f5;
//   border-radius: 8px;
// }
//
// .items {
//   list-style: none;
//   padding: 0;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 16px;
// }
//
// .item-card {
//   background: white;
//   padding: 16px;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// }
//
// .error {
//   background: #fee;
//   border: 1px solid #fcc;
// }