
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AdminComponent } from "./components/administrador/admin/admin.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,RouterLinkActive, 
    AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'karaokeOnline';
}
