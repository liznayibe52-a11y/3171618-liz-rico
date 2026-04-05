import React, { useState, useEffect } from 'react';

// ============================================
// SECCIÓN 1: Detector de Scroll
// ============================================
console.log('--- Sección 1: Scroll Detector ---');

// QUÉ: Componente que rastrea posición de scroll
// PARA: Practicar event listeners con useEffect
// IMPACTO: Sin cleanup, listener queda en memoria tras desmontar

// Descomenta las siguientes líneas:
 export const ScrollDetector: React.FC = () => {
   const [scrollY, setScrollY] = useState<number>(0);

   useEffect(() => {
//     // QUÉ: Handler del evento scroll
//     // PARA: Actualizar estado con posición Y actual
//     // IMPACTO: Se ejecuta cada vez que el usuario hace scroll
     const handleScroll = (): void => {
       setScrollY(window.scrollY);
     };

//     // QUÉ: Agregar event listener al window
//     // PARA: Escuchar eventos de scroll
//     // IMPACTO: Handler se ejecuta en cada scroll
     window.addEventListener('scroll', handleScroll);
     console.log('👂 Scroll listener agregado');

//     // QUÉ: Cleanup que remueve listener
//     // PARA: Prevenir memory leak al desmontar
//     // IMPACTO: Sin esto, listener seguiría ejecutándose
     return () => {
       window.removeEventListener('scroll', handleScroll);
       console.log('🧹 Scroll listener removido');
     };
   }, []); // Array vacío: solo montar/desmontar

   return (
     <div className="scroll-detector">
       <h2>Detector de Scroll</h2>
       <p className="scroll-info">
         Scroll Y: <strong>{scrollY}px</strong>
       </p>
       <p className="hint">👉 Desplázate hacia abajo para ver el valor cambiar</p>
     </div>
   );
 };

// console.log('');
