// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: components/Layout/Layout.tsx
// ============================================

import { type ReactNode } from "react";
import { useConfig } from "../../contexts/useConfig";

// ============================================
// LAYOUT PROPS
// ============================================

interface LayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
}

// ============================================
// LAYOUT COMPONENT
// ============================================

// TODO: Implementa un Layout que aplique los estilos según configuración
export const Layout = ({ children, sidebar }: LayoutProps) => {
  const { theme, fontSize, density } = useConfig();

  // Calcular estilos basados en configuración
  const getFontSizeValue = () => {
    switch (fontSize) {
      case "small":
        return "14px";
      case "medium":
        return "16px";
      case "large":
        return "18px";
    }
  };

  const getPaddingValue = () => {
    switch (density) {
      case "compact":
        return "8px";
      case "normal":
        return "16px";
      case "spacious":
        return "24px";
    }
  };

  return (
    <div
      data-theme={theme}
      style={
        {
          fontSize: getFontSizeValue(),
          "--spacing": getPaddingValue(),
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        } as React.CSSProperties
      }
    >
      {/* Header adaptado a parqueadero */}
      <header
        style={{
          padding: "var(--spacing)",
          borderBottom: "1px solid #ccc",
          fontWeight: "bold",
        }}
      >
        🚗 Sistema de Parqueadero
      </header>

      <main
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        {sidebar && (
          <aside
            style={{
              width: "250px",
              padding: "var(--spacing)",
              borderRight: "1px solid #ccc",
            }}
          >
            {sidebar}
          </aside>
        )}

        <div
          style={{
            flex: 1,
            padding: "var(--spacing)",
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
};
