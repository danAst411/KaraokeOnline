import { HttpClientModule } from '@angular/common/http';
import { RecoverPasswordComponent } from './../recover-password/recover-password.component';
import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent, RegisterComponent, RecoverPasswordComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
