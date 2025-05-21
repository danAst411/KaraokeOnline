import { Component,HostListener  } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-menu-canciones',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './menu-canciones.component.html',
  styleUrl: './menu-canciones.component.css'
})
export class MenuCancionesComponent {

  onMouseOver(event: Event): void {
    (event.target as HTMLElement).style.backgroundColor = '#e2e6ea';
  }

  onMouseOut(event: Event): void {
    (event.target as HTMLElement).style.backgroundColor = '#f8f9fa';
  }
}
