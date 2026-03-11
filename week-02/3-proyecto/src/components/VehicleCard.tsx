import { Vehicle } from '../types';

/**
 * PROPS: ItemCard
 */
interface VehicleCardProps {
  vehicle: Vehicle
  onDelete: (id: number) => void
  onEdit: (id: number) => void
}

/**
 * COMPONENTE: ItemCard
 *
 * Tarjeta individual para mostrar un elemento.
 * Adapta la visualización a tu dominio específico.
 */
const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onDelete, onEdit }) => {
  // ============================================
  // HANDLER: CONFIRMAR ELIMINACIÓN
  // ============================================

  const handleDelete = () => {
    // TODO (Opcional): Agregar confirmación antes de eliminar
    // Ejemplo:
     if (window.confirm(`¿Eliminar "${vehicle.plate}"?`)) {
       onDelete(vehicle.id);
     }
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className="vehicle-card">
      {/* Información principal */}
      <div className="vehicle-card__header">
        <h3 className="vehicle-card__title">{vehicle.plate}</h3>
        <span className={`badge badge--${vehicle.type === 'carro' ? 'success' : 'info'}`}>
          {vehicle.type}
        </span>
        {/* TODO: Agregar badge/etiqueta según tu dominio */}
        {/* Ejemplos:
          - Biblioteca: <span className={`badge badge--${item.available ? 'success' : 'danger'}`}>
                          {item.available ? 'Disponible' : 'Prestado'}
                        </span>
          - Farmacia: <span className="badge badge--info">{item.category}</span>
          - Gimnasio: <span className={`badge badge--${item.active ? 'success' : 'secondary'}`}>
                        {item.active ? 'Activo' : 'Inactivo'}
                      </span>
        */}
      </div>

      {/* Información detallada */}
      <div className="vehicle-card__body">
        {/* TODO: Mostrar propiedades específicas de tu dominio */}
        {/* Ejemplos:
          
          Biblioteca:
          <p><strong>Autor:</strong> {item.author}</p>
          <p><strong>ISBN:</strong> {item.isbn}</p>
          <p><strong>Categoría:</strong> {item.category}</p>
          
          Farmacia:
          <p><strong>Precio:</strong> ${item.price.toFixed(2)}</p>
          <p><strong>Stock:</strong> {item.stock} unidades</p>
          <p><strong>Receta:</strong> {item.requiresPrescription ? 'Sí' : 'No'}</p>
          
          Gimnasio:
          <p><strong>Email:</strong> {item.email}</p>
          <p><strong>Plan:</strong> {item.plan}</p>
          <p><strong>Inicio:</strong> {item.startDate}</p>
        */}

        <p className="vehicle-card__placeholder">
          <p><strong>Placa: </strong> {vehicle.plate}</p>
          <p><strong>Tipo de Vehiculo: </strong> {vehicle.type}</p>
          <p><strong>Fecha entrada: </strong> {vehicle.entryTime}</p>
          <p><strong>Estado </strong> {vehicle.active ? "En parqueadero" : "Retirado"}</p>
        </p>
      </div>

      {/* Acciones */}
      <div className="vehicle-card__actions">
        <button
          className="btn btn-edit"
          onClick={() => onEdit(vehicle.id)}
          aria-label={`Editar ${vehicle.plate}`}>
          ✏️ Editar
        </button>

        <button
          className="btn btn-delete"
          onClick={handleDelete}
          aria-label={`Eliminar ${vehicle.plate}`}>
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
