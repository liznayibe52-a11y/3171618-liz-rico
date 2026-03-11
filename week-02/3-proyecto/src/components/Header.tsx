/**
 * COMPONENTE: Header
 *
 * Muestra el título y descripción de la aplicación.
 * Adapta el contenido a tu dominio específico.
 */

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* TODO: Cambiar el título según tu dominio */}
      {/* Ejemplos:
        - Biblioteca: "📖 Sistema de Gestión de Biblioteca"
        - Farmacia: "💊 Sistema de Gestión de Farmacia"
        - Gimnasio: "🏋️ Sistema de Gestión de Gimnasio"
      */}
      <h1>🚗 Sistema de Parqueadero</h1>

      {/* TODO: Cambiar la descripción según tu dominio */}
      {/* Ejemplos:
        - Biblioteca: "Gestiona libros, autores y préstamos"
        - Farmacia: "Gestiona medicamentos, inventario y ventas"
        - Gimnasio: "Gestiona miembros, planes y asistencias"
      */}
      <p>Gestión de vehículos estacionados</p>
    </header>
  );
};

export default Header;
