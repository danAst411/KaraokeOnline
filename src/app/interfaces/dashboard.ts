export interface Dashboard {
    clientes: {
        activos: number;       // Número de clientes activos
        inactivos: number;     // Número de clientes inactivos
        nuevosEsteMes: number; // Clientes registrados este mes
      };
    ingresos: {
        semanal: number;       // Ingresos de la última semana
        mensual: number;       // Ingresos del último mes
        anual: number;         // Ingresos del último año
      };
}
