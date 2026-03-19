import React, { useState, useEffect } from 'react';

// ============================================
// SECCIÓN 3: Efecto Solo al Montar ([] vacío)
// ============================================
// console.log('--- Sección 3: Efecto al Montar ---');

// QUÉ: Efecto con array de dependencias vacío
// PARA: Ejecutar código SOLO cuando el componente se monta
// IMPACTO: Útil para inicialización, fetch inicial, configuración

// Descomenta las siguientes líneas:
 export const WelcomeMessage: React.FC = () => {
   const [showMessage, setShowMessage] = useState<boolean>(false);
//
   useEffect(() => {
     console.log('✅ Componente montado - este log aparece solo UNA vez');
//
//     // QUÉ: setTimeout que muestra mensaje después de 2 segundos
//     // PARA: Simular una acción de bienvenida con delay
//     // IMPACTO: Se ejecuta solo al montar, no en cada render
     const timerId = setTimeout(() => {
       setShowMessage(true);
       console.log('👋 Mensaje de bienvenida mostrado');
     }, 2000);
//
//     // QUÉ: Cleanup del timeout
//     // PARA: Cancelar el timeout si el componente se desmonta antes
//     // IMPACTO: Previene actualizaciones de estado en componente desmontado
     return () => {
       clearTimeout(timerId);
       console.log('🧹 Cleanup ejecutado');
     };
   }, []); // ← Array vacío = solo al montar
//
   return (
     <div className="welcome">
       <h2>Componente de Bienvenida</h2>
       {showMessage ? (
         <p className="message">¡Bienvenido! 👋</p>
       ) : (
         <p className="loading">Cargando mensaje...</p>
       )}
     </div>
   );
 };

// console.log('');
