import { useState, useEffect } from 'react';
import { Vehicle } from '../types';

/**
 * PROPS: VehicleForm
 */
interface VehicleFormProps {
  onAdd: (vehicle: Omit<Vehicle, 'id'>) => void;
  onUpdate: (id: number, updates: Partial<Vehicle>) => void;
  editingVehicle?: Vehicle;
  onCancelEdit: () => void;
}

/**
 * COMPONENTE: ItemForm
 *
 * Formulario para agregar o editar elementos.
 * Se adapta automáticamente según si hay un elemento siendo editado.
 */
const VehicleForm: React.FC<VehicleFormProps> = ({
  onAdd,
  onUpdate,
  editingVehicle,
  onCancelEdit,
}) => {
  // ============================================
  // ESTADO DEL FORMULARIO
  // ============================================

  // TODO: Define el estado inicial del formulario según tu dominio
  // Ejemplo para referencia (ADAPTAR):
  const initialState = {
    plate: '', type: 'carro' as "carro" | "moto", entryTime: '', active: true 
    // TODO: Agregar más campos según tu dominio
    // Ejemplos:
    // - Biblioteca: author: '', isbn: '', available: true, category: 'fiction'
    // - Farmacia: price: 0, stock: 0, requiresPrescription: false, category: 'analgésico'
    // - Gimnasio: email: '', plan: 'básico', startDate: '', active: true
  };

  const [formData, setFormData] = useState(initialState);

  // ============================================
  // EFECTO: PRE-LLENAR FORMULARIO AL EDITAR
  // ============================================

  useEffect(() => {
    if (editingVehicle) {
      // TODO: Pre-llenar el formulario con los datos del elemento a editar
      // Tip: Extrae solo los campos necesarios (sin id)
      const { id, ...rest } = editingVehicle;
      setFormData(rest);
    } else {
      // Si no hay elemento editando, limpiar formulario
      setFormData(initialState);
    }
  }, [editingVehicle]);

  // ============================================
  // HANDLERS
  // ============================================

  /**
   * Manejar cambios en inputs de texto
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // TODO: Actualizar el estado del formulario
    // Tip: Usa spread operator para mantener los demás campos
    setFormData({ ...formData, [name]: value });
  };

  /**
   * Manejar cambios en selects
   */
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /**
   * Manejar cambios en checkboxes
   */
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  /**
   * Validar datos del formulario
   */
  const validate = (): boolean => {
    // TODO: Implementar validación según tu dominio
    // Ejemplos:
    // - Campos requeridos no vacíos
    // - Números positivos
    // - Emails válidos
    // - Fechas válidas

    if (!formData.plate.trim()) {
      alert('La placa es obligatoria');
      return false;
    }

    // TODO: Agregar más validaciones específicas de tu dominio

    return true;
  };

  /**
   * Manejar submit del formulario
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Validar datos
    if (!validate()) return;

    // TODO: Agregar o actualizar según corresponda
    if (editingVehicle) {
      // Modo edición: actualizar
      onUpdate(editingVehicle.id, formData);
      onCancelEdit();
    } else {
      // Modo agregar: crear nuevo
      onAdd(formData);
    }

    // TODO: Limpiar formulario
    setFormData(initialState);
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className="form-container">
      <h2>{editingVehicle ? '✏️ Editar Vehículo' : '➕ Agregar Vehículo'}</h2>

      <form
        onSubmit={handleSubmit}
        className="vehicle-form">
        {/* Campo: placa */}
        <div className="form-group">
          <label htmlFor="plate">Placa *</label>
          <input
            type="text"
            name="plate"
            value={formData.plate}
            onChange={handleChange}
            placeholder="Ingresa la placa"
            required
          />
        </div>

         {/* Campo: tipo */}
        <div className="form-group">
          <label htmlFor="type">Tipo</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleSelectChange}
          >
            <option value="carro">Carro</option>
            <option value="moto">Moto</option>
          </select>
        </div>

        
        {/* Campo: hora de entrada */}
        <div className="form-group">
          <label htmlFor="entryTime">Hora de entrada *</label>
          <input
            type="time"
            name="entryTime"
            value={formData.entryTime}
            onChange={handleChange}
          />
        </div>


        {/* Campo: Estado */}
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="active"
              checked={formData.active}
              onChange={handleCheckboxChange}
            />
            Vehículo en parqueadero
          </label>
        </div>


        {/* TODO: Agregar más campos según tu dominio */}
        {/* Ejemplos:
          
          Biblioteca:
          <div className="form-group">
            <label htmlFor="author">Autor *</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="isbn">ISBN *</label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="category">Categoría</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleSelectChange}
            >
              <option value="fiction">Ficción</option>
              <option value="non-fiction">No Ficción</option>
              <option value="science">Ciencia</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="available"
                checked={formData.available}
                onChange={handleCheckboxChange}
              />
              Disponible
            </label>
          </div>
        */}

        {/* Botones */}
        <div className="form-actions">
          <button
            type="submit"
            className="btn btn-primary">
            {editingVehicle ? 'Actualizar' : 'Agregar'}
          </button>

          {editingVehicle && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                onCancelEdit();
                setFormData(initialState);
              }}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default VehicleForm;
