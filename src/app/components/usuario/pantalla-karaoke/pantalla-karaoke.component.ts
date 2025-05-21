import { MenuUsuarioComponent } from './../menu-usuario/menu-usuario.component';

import { SugerenciasUsuariosComponent } from "../descubrir/sugerencias-usuarios/sugerencias-usuarios.component";
import { PlaylistRecomendadasComponent } from "../descubrir/playlist-recomendadas/playlist-recomendadas.component";
import { GenerosComponent } from "../descubrir/generos/generos.component";
import { ReproductorComponent } from "../reproductor/reproductor.component";
import { ColaReproduccionComponent } from "../cola-reproduccion/cola-reproduccion.component";
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { BusquedaCancionesComponent } from "../busqueda-canciones/busqueda-canciones.component";
import { BannerNoticiasComponent } from "../banner-noticias/banner-noticias.component";
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';
import { MenuCancionesComponent } from '../menu-canciones/menu-canciones.component';

@Component({
  selector: 'app-pantalla-karaoke',
  standalone: true,
  imports: [  MenuUsuarioComponent, 
    SugerenciasUsuariosComponent, 
    PlaylistRecomendadasComponent, 
    GenerosComponent, 
    ReproductorComponent, ColaReproduccionComponent, RouterOutlet,RouterLink,RouterLinkActive, FormsModule, BusquedaCancionesComponent, BannerNoticiasComponent, MenuLateralComponent, MenuCancionesComponent ],
  templateUrl: './pantalla-karaoke.component.html',
  styleUrl: './pantalla-karaoke.component.css'
})
export class PantallaKaraokeComponent {

  searchQuery: string = '';
  showResults: boolean = false;

  showSearchResults(): void {
    this.showResults = true;
  }

  @Output() close = new EventEmitter<void>();

  closeResults(): void {
    this.close.emit();
  }
}
