import { Component } from '@angular/core';
import { ListaCancionesComponent } from "../../lista-canciones/lista-canciones.component";

@Component({
  selector: 'app-generos',
  standalone: true,
  imports: [ListaCancionesComponent],
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.css'
})
export class GenerosComponent {

}
