import { Cancion } from './../../../interfaces/cancion';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarCancionComponent } from "../../formularios/agregar-cancion/agregar-cancion.component";
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-canciones',
  imports: [CommonModule, AgregarCancionComponent, FormsModule],
  standalone: true,
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.css'
})

export class CancionesComponent implements OnInit {
  canciones: any[] = [];
  cancionesFiltradas: any[] = [];
  terminoBusqueda: string = '';
  cancionEditando: any = {}; // <== para editar

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarCanciones();
  }

  cargarCanciones(): void {
    this.http.get<any[]>('http://localhost:3000/api/canciones').subscribe({
      next: (data) => {
        this.canciones = data;
      },
      error: (err) => {
        console.error('Error al cargar canciones', err);
      }
    });
  }

  // Abrir el modal con los datos actuales
  abrirModalEditar(cancion: any): void {
    this.cancionEditando = { ...cancion }; // copia para edición sin afectar la original
    // Ensure Bootstrap is globally available
    const modal = new (window as any).bootstrap.Modal(document.getElementById('modalEditarCancion')!);
    modal.show();
  }

   // Guardar cambios de edición
   guardarEdicion(): void {
    const id = this.cancionEditando.id;
    this.http.put(`http://localhost:3000/api/canciones/${id}`, this.cancionEditando).subscribe({
      next: () => {
        // Actualizar la lista local
        const index = this.canciones.findIndex(c => c.id === id);
        if (index !== -1) {
          this.canciones[index] = { ...this.cancionEditando };
          this.filtrarCanciones(); // para que se refleje en cancionesFiltradas
        }
        (window as any).bootstrap.Modal.getInstance(document.getElementById('modalEditarCancion')!)?.hide();
        alert('Canción actualizada correctamente');
      },
      error: (err) => {
        console.error('Error al actualizar canción', err);
        alert('Error al actualizar la canción');
      }
    });
  }

  filtrarCanciones(): void {
    const termino = this.terminoBusqueda.toLowerCase().trim();

    this.cancionesFiltradas = this.canciones.filter(cancion =>
      cancion.titulo.toLowerCase().includes(termino) ||
      cancion.artista.toLowerCase().includes(termino) ||
      cancion.genero.toLowerCase().includes(termino) ||
      cancion.id.toString().includes(termino)
    );
  }

  eliminarCancion(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta canción?')) {
      this.http.delete(`http://localhost:3000/api/canciones/${id}`).subscribe({
        next: () => {
          this.canciones = this.canciones.filter(c => c.id !== id);
          this.cancionesFiltradas = this.cancionesFiltradas.filter(c => c.id !== id);
          alert('Canción eliminada correctamente');
        },
        error: (err) => {
          console.error('Error al eliminar canción', err);
          alert('Error al eliminar la canción');
        }
      });
    }
  }
  
}