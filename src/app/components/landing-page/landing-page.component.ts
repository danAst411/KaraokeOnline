import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReproductorComponent } from '../usuario/reproductor/reproductor.component';
import { MenuCancionesComponent } from "../usuario/menu-canciones/menu-canciones.component";
import { MenuUsuarioComponent } from "../usuario/menu-usuario/menu-usuario.component";
import { BannerNoticiasComponent } from "../usuario/banner-noticias/banner-noticias.component";
import { ColaReproduccionComponent } from '../usuario/cola-reproduccion/cola-reproduccion.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    ReproductorComponent, MenuCancionesComponent, MenuUsuarioComponent, BannerNoticiasComponent, ColaReproduccionComponent,],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  
  
}


