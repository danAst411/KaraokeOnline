import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.css'
})
export class RecoverPasswordComponent {
  recoveryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.recoveryForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.recoveryForm.valid) {
      console.log('Correo para recuperación de contraseña:', this.recoveryForm.value);
      // Aquí puedes realizar la lógica para enviar el correo de recuperación
      alert('Se enviaron las instrucciones a tu correo!');
    }
  }
}
