import { Component } from '@angular/core';
import { SugerenciasUsuariosComponent } from "../descubrir/sugerencias-usuarios/sugerencias-usuarios.component";
import { PlaylistRecomendadasComponent } from "../descubrir/playlist-recomendadas/playlist-recomendadas.component";
import { GenerosComponent } from "../descubrir/generos/generos.component";
import { ReproductorComponent } from "../reproductor/reproductor.component";
import { ColaReproduccionComponent } from "../cola-reproduccion/cola-reproduccion.component";
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-pantalla-karaoke',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,
    SugerenciasUsuariosComponent, PlaylistRecomendadasComponent, GenerosComponent, ReproductorComponent, ColaReproduccionComponent],
  templateUrl: './pantalla-karaoke.component.html',
  styleUrl: './pantalla-karaoke.component.css'
})
export class PantallaKaraokeComponent {

}
