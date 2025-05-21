import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-busqueda-canciones',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './busqueda-canciones.component.html',
  styleUrl: './busqueda-canciones.component.css'
})
export class BusquedaCancionesComponent {

}
