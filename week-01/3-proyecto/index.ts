// ============================================
// PROYECTO SEMANAL: MODELADO DE ENTIDADES
// ============================================
console.log('');
console.log('🏛️ PROYECTO SEMANAL: MODELADO DE ENTIDADES\n');
console.log('');
console.log('------Dominio asignado PARQUEADERO-------');
console.log('');

// INSTRUCCIONES:
// Adapta este archivo a tu dominio asignado (ej: biblioteca, farmacia, gimnasio, restaurante, etc.)
// Implementa las entidades, tipos y funciones siguiendo los TODOs y comentarios.
// Usa interfaces, types, type unions y literales. Comenta el código con qué/para/impacto.

// ============================================
// 1. Define las entidades principales de tu dominio
// ============================================

// TODO: Define una interface para la entidad principal (ej: Book, Medicine, Member, Dish)
// QUÉ: definir la forma de un objeto vehicle
// PARA: especificar qué propiedades tiene un vehiculo del parqueadero
// IMPACTO: TypeScript valida que los objetos cumplan esta estructura
 let vehicles: vehicle[] = [];
interface vehicle {
   id_vehicle: number;
   plate: string;
   vehicle_type: vehicle_type;
   entry_date: Date;
   assigned_position: number; 
 }

// TODO: Define al menos otra interface relacionada (ej: Author, Sale, Routine, Table)
let shifts: shift[] = [];
interface shift {
   id_shift: number;
   vehicle_id: number; 
   start_time: Date;
   end_time: Date;
   status: status; 
}

// ============================================
// 2. Usa type unions y literales para propiedades clave
// ============================================

// TODO: Define un type union para un estado, categoría o rol relevante
// QUÉ: crear un vehicle_type para los vehiculos permitidos
// PARA: limitar los vehiculos a dos valores especificos
// IMPACTO: TypeScript valida que vehiculos sea uno de estos valores
 type vehicle_type = 'carro' | 'moto' | 'camioneta';

// TODO: Usa un type literal para limitar valores permitidos
// QUÉ: crear un type status para los estados permitidos
// PARA: limitar el estado a dos valores especificos
// IMPACTO: TypeScript valida que status sea uno de estos dos valores
 type status = 'activo' | 'finalizado';

// ============================================
// 3. Implementa funciones tipadas para operaciones básicas
// ============================================

// TODO: Implementa una función que cree una entidad
// QUÉ: función que crea y almacena vehiculos en un arreglo tipado
// PARA: registrar nuevos vehiculos cumpliendo la estructura definida en el tipo vehicle
// IMPACTO: garantiza tipado seguro y permite gestionar vehiculos
 function createVeicle(
    id_vehicle: number,
   plate: string,
   vehicle_type: vehicle_type,
   entry_date: Date,
   assigned_position: number 
 ): vehicle {
    const newVehicle: vehicle = {
        id_vehicle,
        plate,
        vehicle_type,
        entry_date,
        assigned_position
    };
    vehicles.push(newVehicle);
    return newVehicle;
 }

function createShift(
     id_shift: number,
   vehicle_id: number, 
   start_time: Date,
   end_time: Date,
   status: status 
): shift {
    const newShift: shift = {
         id_shift,
        vehicle_id, 
        start_time,
        end_time,
        status
    };
    shifts.push(newShift);
    return newShift;
}


// TODO: Implementa una función que liste entidades
// QUÉ: función que retorna la lista completa de productos almacenados
// PARA: consultar todos los productos registrados en el sistema
// IMPACTO: permite visualizar y gestionar los productos existentes, facilitando futuras operaciones como filtrar, buscar o actualizar
 function listVehicles( ): vehicle[] {
   return vehicles;
 }

 function listShifts( ): shift[] {
    return shifts;
 }
// TODO: Implementa una función que filtre entidades por status/categoría
// QUÉ: función que filtre vehiculos por estado
// PARA: obtener únicamente los vehiculos que coincidan con el state indicado
// IMPACTO: permite segmentar vehiculos dinámicamente y mejorar la gestión de datos
 function filterByVehicleType(vehicle_type: vehicle_type): vehicle[] {
  return vehicles.filter(vehicle => vehicle.vehicle_type === vehicle_type);
}

function filterByStatus(status: status): shift[] {
    return shifts.filter(shift => shift.status === status);
}
// ============================================
// 4. Prueba tus funciones con datos de ejemplo
// ============================================

// TODO: Crea algunos objetos de ejemplo y prueba las funciones
// Vehiculos
console.log('CREAR VEHICULOS DEL PARQUEADERO:');
console.log('');
 console.log(createVeicle(1, "ABC123", "carro", new Date("2026-02-08T10:30:00"), 10));
 console.log(createVeicle(2, "XYZ789", "carro", new Date("2026-02-08T12:05:00"), 15));
 console.log(createVeicle(3, "HST653", "moto", new Date("2026-02-08T13:35:00"), 11));
 console.log('');
 console.log('LISTAR VEHICULOS:');
 console.log('');
 console.log(listVehicles());
 console.log('');
 console.log('FILTRAR VEHICULOS POR TIPO:');
 console.log('');
 console.log(filterByVehicleType("carro"));
 console.log('');

 // TURNOS
 console.log('CREAR TURNOS:');
 console.log('');
console.log(createShift(1, 1, new Date("2026-02-08T10:30:00"), new Date("2026-02-08T12:30:00"), "activo"));
console.log(createShift(2, 2, new Date("2026-02-08T12:05:00"), new Date("2026-02-08T15:25:00"), "finalizado"));
console.log(createShift(3, 3, new Date("2026-02-08T13:35:00"), new Date("2026-02-08T14:30:00"), "activo"));
console.log('');
console.log('LISTAR TURNOS:');
console.log('');
console.log(listShifts());
console.log('');
console.log('FILTRAR TURNOS POR ESTADO:');
console.log('');
console.log(filterByStatus("activo"));
console.log('');
 

// ============================================
// 5. Comenta tu código explicando qué/para/impacto
// ============================================

// QUÉ: ...
// PARA: ...
// IMPACTO: ...

console.log('\n🚦 Recuerda: Adapta TODO a tu dominio y comenta tu código.');
