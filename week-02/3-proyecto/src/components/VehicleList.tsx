import { Vehicle } from '../types';
import VehicleCard from './VehicleCard';

/**
 * PROPS: VehiclesList
 */
interface VehicleListProps {
  vehicles: Vehicle[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

/**
 * COMPONENTE: ItemList
 *
 * Renderiza la lista de elementos usando .map()
 */
const VehicleList: React.FC<VehicleListProps> = ({ vehicles, onDelete, onEdit }) => {
  // Manejar estado vacío
  if (vehicles.length === 0) {
    return (
      <div className="empty-state">
        <p>📭 No hay vehiculos para mostrar</p>
        <p className="empty-state__hint">
          Agrega tu primer vehiculo usando el formulario de arriba
        </p>
      </div>
    );
  }

  // ============================================
  // RENDER: LISTA DE ELEMENTOS
  // ============================================

  return (
    <div className="vehicle-list">
      {/* TODO: Usar .map() para renderizar cada elemento */}
      {/* Recuerda:
        - SIEMPRE usar key única (item.id)
        - Pasar todas las props necesarias a ItemCard
        - Usar arrow functions para los callbacks
      */}
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default VehicleList;
