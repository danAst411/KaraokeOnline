import { GenerosComponent } from '../generos/generos.component';
import { SugerenciasUsuariosComponent } from '../sugerencias-usuarios/sugerencias-usuarios.component';
import { PlaylistRecomendadasComponent } from '../playlist-recomendadas/playlist-recomendadas.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-panel-canciones',
  standalone: true,
  imports: [ SugerenciasUsuariosComponent, GenerosComponent, PlaylistRecomendadasComponent ],
  templateUrl: './panel-canciones.component.html',
  styleUrl: './panel-canciones.component.css'
})
export class PanelCancionesComponent {

}
