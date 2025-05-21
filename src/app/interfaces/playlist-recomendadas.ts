// src/app/interfaces/playlist-recomendada.interface.ts

import { Cancion } from './cancion';

export interface PlaylistRecomendada {
  id: number;
  nombre: string;
  estado: boolean;
  Cancions: Cancion[]; // Asociadas a la playlist
}
