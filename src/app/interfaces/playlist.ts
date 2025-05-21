export interface Playlist {
    id: number;
    nombre: string;
    descripcion: string;
    usuario_id: number; // Relación con el usuario
    canciones: number[]; // IDs de las canciones en la lista
}
