// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: components/Card/Card.tsx
// ============================================

import {
  createContext,
  useContext,
  type ReactNode,
  type CSSProperties,
} from "react";

// ============================================
// CONTEXT INTERNO
// ============================================

// TODO: Crea un contexto interno para el Card (no exportado)
// Este contexto permite que los subcomponentes accedan al estado del Card
interface CardContextValue {
  variant?: "default" | "outlined" | "elevated";
}

const CardContext = createContext<CardContextValue | undefined>(undefined);

// ============================================
// CARD ROOT
// ============================================

// TODO: Implementa el componente raíz del Card
interface CardRootProps {
  children: ReactNode;
  variant?: "default" | "outlined" | "elevated";
  className?: string;
  style?: CSSProperties;
}

const CardRoot = ({
  children,
  variant = "default",
  className,
  style,
}: CardRootProps) => {
  return (
    <CardContext.Provider value={{ variant }}>
      <div
        className={className}
        style={{
          border: variant === "outlined" ? "1px solid #ccc" : "none",
          boxShadow:
            variant === "elevated" ? "0px 4px 10px rgba(0,0,0,0.1)" : "none",
          borderRadius: "8px",
          padding: "12px",
          backgroundColor: "#fff",
          ...style,
        }}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
};

// ============================================
// CARD HEADER
// ============================================

// TODO: Implementa el header del Card con slots para título y acciones
interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader = ({ children, className }: CardHeaderProps) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
      }}
    >
      {children}
    </div>
  );
};

// ============================================
// CARD TITLE
// ============================================

// TODO: Implementa el título del Card
interface CardTitleProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const CardTitle = ({ children, as: Tag = 'h3' }: CardTitleProps) => {
  const context = useContext(CardContext);

  return (
    <Tag
      style={{
        margin: 0,
        fontWeight: 600,
        color:
          context?.variant === 'outlined'
            ? '#333'
            : context?.variant === 'elevated'
            ? '#000'
            : '#555',
      }}
    >
      {children}
    </Tag>
  );
};
// ============================================
// CARD ACTIONS
// ============================================

// TODO: Implementa el contenedor de acciones
interface CardActionsProps {
  children: ReactNode;
}

const CardActions = ({ children }: CardActionsProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
      }}
    >
      {children}
    </div>
  );
};

// ============================================
// CARD BODY
// ============================================

// TODO: Implementa el cuerpo del Card
interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

const CardBody = ({ children, className }: CardBodyProps) => {
  return (
    <div className={className} style={{ marginBottom: "8px" }}>
      {children}
    </div>
  );
};

// ============================================
// CARD FOOTER
// ============================================

// TODO: Implementa el pie del Card
interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

const CardFooter = ({ children, className }: CardFooterProps) => {
  return (
    <div
      className={className}
      style={{
        borderTop: "1px solid #eee",
        paddingTop: "8px",
        fontSize: "14px",
      }}
    >
      {children}
    </div>
  );
};

// ============================================
// COMPOUND COMPONENT EXPORT
// ============================================

// TODO: Usa Object.assign para crear el compound component
const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Actions: CardActions,
  Body: CardBody,
  Footer: CardFooter,
});

export { Card };