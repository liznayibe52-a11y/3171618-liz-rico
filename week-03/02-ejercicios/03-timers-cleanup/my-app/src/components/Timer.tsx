import React, { useState, useEffect } from 'react';

// ============================================
// SECCIÓN 1: Cronómetro con setInterval
// ============================================
//console.log('--- Sección 1: Cronómetro ---');

// QUÉ: Cronómetro que incrementa cada segundo
// PARA: Practicar setInterval con useEffect y cleanup
// IMPACTO: Sin cleanup, interval seguiría corriendo tras desmontar

// Descomenta las siguientes líneas:
 export const Timer: React.FC = () => {
   const [seconds, setSeconds] = useState<number>(0);
   const [isActive, setIsActive] = useState<boolean>(false);

   useEffect(() => {
     let intervalId: number | undefined;

     if (isActive) {
//       // QUÉ: setInterval que actualiza estado cada 1000ms
//       // PARA: Incrementar contador mientras esté activo
//       // IMPACTO: Usa función updater para evitar closure stale
       intervalId = window.setInterval(() => {
         setSeconds((prev) => prev + 1);
       }, 1000);

       console.log('⏱️ Interval iniciado');
     }

//     // QUÉ: Cleanup que detiene el interval
//     // PARA: Limpiar cuando isActive cambia o al desmontar
//     // IMPACTO: Previene memory leak de interval corriendo indefinidamente
     return () => {
       if (intervalId) {
         clearInterval(intervalId);
         console.log('🧹 Interval limpiado');
       }
     };
   }, [isActive]); // Re-ejecutar cuando isActive cambia

   const toggle = (): void => {
     setIsActive(!isActive);
   };

   const reset = (): void => {
     setSeconds(0);
     setIsActive(false);
   };

   return (
     <div className="timer">
       <h2>Cronómetro</h2>
       <div className="display">{seconds}s</div>
       <button onClick={toggle}>{isActive ? 'Pausar' : 'Iniciar'}</button>
       <button onClick={reset}>Reset</button>
     </div>
   );
 };

// console.log('');
