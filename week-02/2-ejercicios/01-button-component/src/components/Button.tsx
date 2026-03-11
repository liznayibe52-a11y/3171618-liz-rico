import React from 'react';

// ============================================
// PASO 1: Definir Props con TypeScript
// ============================================
// Descomenta estas líneas para definir las props del botón:

// En React con TypeScript, definimos interfaces para las props.
// Esta interfaz describe exactamente qué datos el botón espera recibir.
//
interface ButtonProps {
  text: string;                    // El texto que se muestra
  onClick: () => void;             // Función que se ejecuta al clickear
  variant?: 'primary' | 'secondary'; // Tipo de botón (opcional)
  disabled?: boolean;              // Si está deshabilitado (opcional)
}
//
// La interfaz es un "contrato" - cualquiera que use <Button /> DEBE
// pasar text y onClick, y PUEDE pasar variant y disabled.

// ============================================
// PASO 2: Crear el Componente Funcional
// ============================================
// Descomenta estas líneas para crear el componente:

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',  // Valor por defecto
  disabled = false      // Valor por defecto
}) => {
  // Ahora tenemos acceso a las 4 props
  // TypeScript se asegura que existan y tengan el tipo correcto

  // ============================================
  // PASO 3: Agregar Estilos Dinámicos
  // ============================================
  // Descomenta estas líneas para cambiar el estilo según variant:

  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  // ============================================
  // PASO 4: Renderizar el botón
  // ============================================
  // Descomenta el return:

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variantClass}`}
    >
      {text}
    </button>
  );
};

// Cuando termines de descomentar, el componente debería:
// 1. Recibir las props (text, onClick, variant, disabled)
// 2. Retornar un <button>
// 3. Aplicar clases CSS según variant
// 4. Desabilitar el botón si disabled={true}
//
// Ejemplo de uso:
// <Button
//   text="Enviar"
//   onClick={() => console.log('Enviado')}
//   variant="primary"
// />

console.log('🔘 Componente Button - Descomenta el código arriba para comenzar');