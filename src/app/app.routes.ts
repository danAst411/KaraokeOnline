import { Routes } from '@angular/router';
import path from 'path';
import { AnaliticasComponent } from './components/administrador/analiticas/analiticas.component';
import { DashboardComponent } from './components/administrador/dashboard/dashboard.component';
import { ClientesComponent } from './components/administrador/clientes/clientes.component';
import { CancionesComponent } from './components/administrador/canciones/canciones.component';
import { PlaylistComponent } from './components/administrador/playlist/playlist.component';
import { SugerenciasComponent } from './components/administrador/sugerencias/sugerencias.component';
import { SistemaCalificacionesComponent } from './components/administrador/sistema-calificaciones/sistema-calificaciones.component';

export const routes: Routes = [
  { path: 'analiticas', component: AnaliticasComponent },

  { path: 'dashboard', component: DashboardComponent },

  { path: 'clientes', component: ClientesComponent },

  { path: 'canciones', component: CancionesComponent },

  { path: 'playlist', component: PlaylistComponent },
  
  { path: 'sugerencias', component: SugerenciasComponent },

  { path: 'calificacion', component: SistemaCalificacionesComponent },

];
