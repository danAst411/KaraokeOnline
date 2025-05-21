import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule , HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
  
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      pais: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', Validators.required]
    }, { validator: this.matchPasswords });
  }

  // Validador personalizado para verificar que las contraseñas coincidan
  matchPasswords(group: FormGroup) {
    const password = group.get('contrasena')?.value;
    const confirmPassword = group.get('confirmarContrasena')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Datos de registro:', this.registerForm.value);
      
      // Crear un objeto para enviar al backend
      const usuario = {
        nombre: this.registerForm.value.nombre,
        apellido: this.registerForm.value.apellido,
        correo_electronico: this.registerForm.value.correo,
        telefono: this.registerForm.value.telefono,
        pais: this.registerForm.value.pais,
        contrasena: this.registerForm.value.contrasena,
        estado: false
      };

      // Llamar al backend para registrar el usuario
      this.http.post('http://localhost:3000/api/usuarios/registrar', usuario)
        .subscribe(
          (response: any) => {
            console.log('Usuario registrado', response);
            
            this.router.navigate(['registro-exitoso']);  // Redirigir al login
          },
          (error) => {
            console.error('Error al registrar el usuario', error);
            alert('Error al registrar el usuario.');
          }
        );
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
