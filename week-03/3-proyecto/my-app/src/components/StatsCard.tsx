import React, { useState, useEffect } from 'react';
import type { Stats } from '../types';
import { fetchStats } from '../utils/api';

// ============================================
// COMPONENTE: StatsCard
// Muestra estadísticas clave del dominio
// ============================================

// NOTA PARA EL APRENDIZ:
// Este componente debe:
// 1. Tener múltiples useEffect para diferentes stats
// 2. Cada stat se carga de forma independiente
// 3. Manejar loading de cada stat individualmente
// 4. Mostrar las métricas de forma clara y visual

export const StatsCard: React.FC = () => {
  // TODO: 1. Definir estados para diferentes stats
  // Puedes tener un estado Stats o estados separados por métrica
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // TODO: 2. Implementar useEffect para cargar stats
  useEffect(() => {
    const loadStats = async () => {
      try {
        setLoading(true);
        const data = await fetchStats();
        setStats(data);
      } catch (err) {
        console.error('Error loading stats:', err);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  // TODO: 4. Renderizado condicional para loading
  if (loading) {
    return (
      <div className="stats-card">
        <h2>Cargando estadísticas del parqueadero...</h2>
      </div>
    );
  }

  // TODO: 5. Renderizado principal: mostrar stats
  return (
    <div className="stats-card">
      <h2>Estadísticas del Parqueadero 🚗</h2>
      {/* TODO: Cambiar título según tu dominio */}

      <div className="stats-grid">
        {/* TODO: Stat 1 - Total de elementos */}
        <div className="stat">
          <div className="stat-value">{stats?.total || 0}</div>
          <div className="stat-label">Vehículos Totales</div>
          {/* TODO: Cambiar label según tu dominio */}
          {/* Ejemplos: "Total de Libros", "Productos", "Miembros" */}
        </div>

        {/* TODO: Stat 2 - Elementos activos/disponibles */}
        <div className="stat">
          <div className="stat-value">{stats?.active || 0}</div>
          <div className="stat-label">En Parqueadero</div>
          {/* TODO: Cambiar label según tu dominio */}
          {/* Ejemplos: "Disponibles", "En Stock", "Activos Hoy" */}
        </div>

        {/* TODO: Stat 3 - Porcentaje o métrica calculada */}
        <div className="stat">
          <div className="stat-value">{stats?.percentage || 0}%</div>
          <div className="stat-label">Ocupación</div>
          {/* TODO: Cambiar label según tu dominio */}
          {/* Ejemplos: "Disponibilidad", "Ocupación", "Tasa de Ventas" */}
        </div>

        {/* TODO: (Opcional) Agregar más stats específicos de tu dominio */}
        <div className="stat">
          <div className="stat-value">{stats?.income || 0}</div>
          <div className="stat-label">Ingresos del Día 💰</div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// ESTILOS SUGERIDOS
// ============================================

// .stats-card {
//   padding: 20px;
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0 2px 8px rgba(0,0,0,0.1);
// }
//
// .stats-grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//   gap: 16px;
//   margin-top: 16px;
// }
//
// .stat {
//   text-align: center;
//   padding: 16px;
//   background: #f8f9fa;
//   border-radius: 8px;
// }
//
// .stat-value {
//   font-size: 2.5rem;
//   font-weight: bold;
//   color: #2c3e50;
// }
//
// .stat-label {
//   font-size: 0.9rem;
//   color: #7f8c8d;
//   margin-top: 8px;
//   text-transform: uppercase;
// }