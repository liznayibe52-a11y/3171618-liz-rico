import { useState } from 'react';
import { Vehicle } from './types';
import Header from './components/Header';
import ItemForm from './components/VehicleForm';
import VehicleList from './components/VehicleList';

/**
 * COMPONENTE PRINCIPAL: App
 *
 * Este componente gestiona el estado global de la aplicación
 * y coordina la comunicación entre componentes hijos.
 */
const App = () => {
  // ============================================
  // ESTADO PRINCIPAL
  // ============================================

  // TODO: Estado para la lista de elementos
  // Tip: Usa useState<Item[]>([])
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  // TODO: Estado para edición (id del elemento siendo editado)
  // Tip: Usa useState<number | null>(null)
  const [editingId, setEditingId] = useState<number | null>(null);

  // ============================================
  // FUNCIONES CRUD
  // ============================================

  /**
   * Agregar nuevo elemento
   * @param vehicle - Datos del nuevo elemento (sin id)
   */
  const addVehicle = (vehicle: Omit<Vehicle, 'id'>): void => {
    // TODO: Implementar
    // 1. Crear nuevo objeto con id único (Date.now())
    // 2. Agregar al array con spread operator: [...items, newItem]
    // 3. Usar setItems para actualizar el estado

    const newVehicle: Vehicle = {
      ...vehicle,
      id: Date.now(), // Genera ID único basado en timestamp
    };

    setVehicles([...vehicles, newVehicle]);
  };

  /**
   * Actualizar elemento existente
   * @param id - ID del elemento a actualizar
   * @param updates - Propiedades a actualizar
   */
  const updateVehicle = (id: number, updates: Partial<Vehicle>): void => {
    // TODO: Implementar
    // 1. Usar map() para recorrer items
    // 2. Si item.id === id, crear nuevo objeto con {...item, ...updates}
    // 3. Si no, mantener el item sin cambios
    // 4. Usar setItems con el nuevo array

    setVehicles(
      vehicles.map((vehicle) => (vehicle.id === id ? { ...vehicle, ...updates } : vehicle)),
    );
  };

  /**
   * Eliminar elemento
   * @param id - ID del elemento a eliminar
   */
  const deleteVehicle = (id: number): void => {
    // TODO: Implementar
    // 1. Usar filter() para crear nuevo array sin el elemento
    // 2. Condición: item.id !== id
    // 3. Usar setItems con el nuevo array

    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };

  /**
   * Preparar elemento para edición
   * @param id - ID del elemento a editar
   */
  const startEdit = (id: number): void => {
    // TODO: Implementar
    // Simplemente actualiza el estado editingId con el id recibido
    setEditingId(id);
  };

  /**
   * Cancelar edición
   */
  const cancelEdit = (): void => {
    // TODO: Implementar
    // Simplemente actualiza el estado editingId a null
    setEditingId(null);
  };

  // ============================================
  // ELEMENTO SIENDO EDITADO
  // ============================================

  // TODO: Encontrar el elemento que se está editando
  // Tip: Usa find() con editingId
  const vehicleToEdit = editingId
    ? vehicles.find((vehicle) => vehicle.id === editingId)
    : undefined;

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className="app">
      {/* Header con título y descripción */}
      <Header />

      <div className="container">
        {/* Formulario para agregar/editar */}
        <ItemForm
          onAdd={addVehicle}
          onUpdate={updateVehicle}
          editingVehicle={vehicleToEdit}
          onCancelEdit={cancelEdit}
        />

        {/* Lista de elementos */}
        <VehicleList
          vehicles={vehicles}
          onDelete={deleteVehicle}
          onEdit={startEdit}
        />
      </div>
    </div>
  );
};

export default App;
