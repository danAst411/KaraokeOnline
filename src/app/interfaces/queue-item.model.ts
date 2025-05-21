// src/app/interfaces/queue-item.model.ts
export interface QueueItem {
  id: number;
  orden: number;
  estado: boolean;
  usuarioId: number;

  cancion: {
    id: number;
    titulo: string;
    artista: string;
    genero?: string;
    numero_de_reproducciones?: number;
  };
}
