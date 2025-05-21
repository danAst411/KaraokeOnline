import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      correo_electronico: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
   // this.loginForm = this.fb.group({
    //  correo: ['', [Validators.required, Validators.email]],  // Validación para correo
      //contrasena: ['', [Validators.required, Validators.minLength(6)]] // Validación para contraseña
   // });
  } 

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      // Llamamos al servicio de autenticación
      this.authService.login(credentials).subscribe(response => {
        // Guardar token en localStorage
        localStorage.setItem('token', response.token);
      
        // Guardar el rol también si lo necesitas
        localStorage.setItem('rol', response.rol); // opcional
      
        // Redirección según rol
        const role = response.rol;
        if (role === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/karaoke']);
        }
      }, error => {
        console.error('Error de login', error);
      });
      
    }
  }
}

