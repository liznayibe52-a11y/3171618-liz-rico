// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: components/SettingsPanel/SettingsPanel.tsx
// ============================================

import { useConfig } from "../../contexts/useConfig";
import { Card } from "../Card/Card";

// ============================================
// THEME SELECTOR
// ============================================

// TODO: Componente para seleccionar tema
const ThemeSelector = () => {
  const { theme, setTheme } = useConfig();

  return (
    <Card variant="outlined">
      <Card.Header>
        <Card.Title>🎨 Tema del sistema</Card.Title>
      </Card.Header>
      <Card.Body>
        <button onClick={() => setTheme("light")}>Claro</button>
        <button onClick={() => setTheme("dark")}>Oscuro</button>

        <p>Actual: {theme}</p>
      </Card.Body>
    </Card>
  );
};

// ============================================
// FONT SIZE SELECTOR
// ============================================

// TODO: Componente para seleccionar tamaño de fuente
const FontSizeSelector = () => {
  const { fontSize, setFontSize } = useConfig();

  return (
    <Card variant="outlined">
      <Card.Header>
        <Card.Title>🔤 Tamaño de Texto</Card.Title>
      </Card.Header>
      <Card.Body>
        <button
          onClick={() => setFontSize("small")}
          style={{
            fontWeight: fontSize === "small" ? "bold" : "normal",
          }}
        >
          Pequeño
        </button>

        <button
          onClick={() => setFontSize("medium")}
          style={{
            fontWeight: fontSize === "medium" ? "bold" : "normal",
          }}
        >
          Medio
        </button>

        <button
          onClick={() => setFontSize("large")}
          style={{
            fontWeight: fontSize === "large" ? "bold" : "normal",
          }}
        >
          Grande
        </button>

        <p>Actual: {fontSize}</p>

        <p>Vista previa del parqueadero</p>
      </Card.Body>
    </Card>
  );
};

// ============================================
// DENSITY SELECTOR
// ============================================

// TODO: Componente para seleccionar densidad
const DensitySelector = () => {
  const { density, setDensity } = useConfig();

  return (
    <Card variant="outlined">
      <Card.Header>
        <Card.Title>📐 Densidad de interfaz</Card.Title>
      </Card.Header>
      <Card.Body>
        <button onClick={() => setDensity("compact")}>Compacto</button>
        <button onClick={() => setDensity("normal")}>Normal</button>
        <button onClick={() => setDensity("spacious")}>Espaciado</button>

        <p>Actual: {density}</p>
      </Card.Body>
    </Card>
  );
};

// ============================================
// NOTIFICATION SETTINGS
// ============================================

// TODO: Componente para configurar notificaciones
const NotificationSettings = () => {
  const { notifications, setNotification } = useConfig();

  return (
    <Card variant="outlined">
      <Card.Header>
        <Card.Title>🔔 Notificaciones del parqueadero</Card.Title>
      </Card.Header>
      <Card.Body>
        <label>
          <input
            type="checkbox"
            checked={notifications.email}
            onChange={(e) => setNotification("email", e.target.checked)}
          />
          Email
        </label>

        <label>
          <input
            type="checkbox"
            checked={notifications.push}
            onChange={(e) => setNotification("push", e.target.checked)}
          />
          Push
        </label>

        <label>
          <input
            type="checkbox"
            checked={notifications.sound}
            onChange={(e) => setNotification("sound", e.target.checked)}
          />
          Sonido (entrada/salida vehículos)
        </label>
      </Card.Body>
    </Card>
  );
};

// ============================================
// RESET BUTTON
// ============================================

// TODO: Botón para resetear configuración
const ResetSettings = () => {
  const { reset } = useConfig();

  return <button onClick={reset}>Restaurar configuración</button>;
};

// ============================================
// SETTINGS PANEL PRINCIPAL
// ============================================

// TODO: Panel que agrupa todas las configuraciones
export const SettingsPanel = () => {
  return (
    <div className="settings-panel">
      <h2>⚙️ Configuración del Parqueadero</h2>

      <ThemeSelector />
      <FontSizeSelector />
      <DensitySelector />
      <NotificationSettings />
      <ResetSettings />
    </div>
  );
};
