import { Usuario } from './../../../interfaces/usuario';
import { Component, OnInit, Inject } from '@angular/core';
import { UsuarioService } from './../../../services/usuario.service'; // Adjust the path as needed
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
  providers: [UsuarioService] // Ensure the service is provided here
})
export class ClientesComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Obtener usuarios al cargar el componente
    this.obtenerUsuarios();
  }
  
  obtenerUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe(
      (response) => {
        this.usuarios = response.usuarios; // Actualiza la lista de usuarios
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
        // Maneja el error aquí, como mostrar un mensaje de error
      }
    );
  }
  renovarSuscripcion(id: number): void {
    this.usuarioService.renovarUsuario(id).subscribe(
      (response) => {
        
        this.usuarioService.obtenerUsuarios(); // Recargar los usuarios después de la renovación
      },
      (error) => {
        console.error('Error al renovar suscripción:', error);
        alert('Hubo un error al renovar la suscripción');
      }
    );
  }

  cancelarSuscripcion(id: number): void {
    this.usuarioService.cancelarSuscripcion(id).subscribe(
      (response) => {
        // Recargar la lista de usuarios después de cancelar la suscripción
        this.obtenerUsuarios();
      },
      (error) => {
        console.error('Error al cancelar suscripción:', error);
        alert('Hubo un error al cancelar la suscripción');
      }
    );
  }
}


