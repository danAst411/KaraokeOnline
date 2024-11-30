import { Component } from '@angular/core';
import { ColaReproduccionComponent } from '../cola-reproduccion/cola-reproduccion.component';
@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [ ColaReproduccionComponent],
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css'
})
export class ReproductorComponent {

}
