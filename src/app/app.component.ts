import { HttpClient, HttpClientModule } from '@angular/common/http';


import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AdminComponent } from "./components/administrador/admin/admin.component";
import { CommonModule } from '@angular/common';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  NavMenuComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'karaokeOnline';
  
  
}
