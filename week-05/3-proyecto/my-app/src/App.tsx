// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: App.tsx
// ============================================

import { ConfigProvider } from "./contexts/ConfigContext";
import { Layout } from "./components/Layout/Layout";
import { SettingsPanel } from "./components/SettingsPanel/SettingsPanel";
import { Card } from "./components/Card/Card";

// ============================================
// DATOS DE EJEMPLO (ADAPTAR A TU DOMINIO)
// ============================================

// TODO: Adapta los datos a tu dominio asignado

const parkingSpots = [
  { id: "1", spot: "A1", plate: "ABC123", status: "Ocupado" },
  { id: "2", spot: "A2", plate: "XYZ789", status: "Disponible" },
  { id: "3", spot: "B1", plate: "LMN456", status: "Ocupado" },
];

// ============================================
// CONTENIDO PRINCIPAL (ADAPTAR A TU DOMINIO)
// ============================================

const MainContent = () => {
  return (
    <div>
      <h1>🚗 Sistema de Parqueadero</h1>
      <p>
        Esta aplicación permite gestionar los cupos de un parqueadero utilizando
        Context API y Compound Components.
      </p>

      {/* Cards con datos del dominio */}
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "16px",
        }}
      >
        {parkingSpots.map((item) => (
          <Card
            key={item.id}
            variant={item.status === "Ocupado" ? "elevated" : "outlined"}
          >
            <Card.Header>
              <Card.Title>Cupo {item.spot}</Card.Title>
            </Card.Header>

            <Card.Body>
              <p>Placa: {item.plate}</p>
              <p>Estado: {item.status}</p>
            </Card.Body>

            <Card.Footer>
              <Card.Actions>
                <button>Ver detalle</button>
              </Card.Actions>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ============================================
// APLICACIÓN PRINCIPAL
// ============================================

// TODO: Implementa la aplicación con ConfigProvider y Layout
export const App = () => {
  return (
    <ConfigProvider>
      <Layout sidebar={<SettingsPanel />}>
        <MainContent />
      </Layout>
    </ConfigProvider>
  );
};
