import { Component } from '@angular/core';
import { RouterOutlet,RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [RouterOutlet,  RouterLink],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {

}
