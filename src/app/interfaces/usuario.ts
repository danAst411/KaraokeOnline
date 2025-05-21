export interface Usuario {
    id: number;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  pais: string;
  fecha_inicio: string; // formato: YYYY-MM-DD
  fecha_fin: string;    // formato: YYYY-MM-DD
  activo: boolean;
}
