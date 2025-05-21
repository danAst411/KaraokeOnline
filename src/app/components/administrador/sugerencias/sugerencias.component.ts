import { SugerenciaCanciones } from './../../../interfaces/sugerencia-canciones';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

declare const bootstrap: any;

@Component({
  selector: 'app-sugerencias',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './sugerencias.component.html',
  styleUrl: './sugerencias.component.css'
})
export class SugerenciasComponent implements OnInit {
  sugerencias: any[] = [];
  sugerenciaSeleccionada: any = {};

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

 ngOnInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    this.cargarSugerencias(); // Solo se ejecuta en el navegador
  }
}

cargarSugerencias(): void {
  if (!isPlatformBrowser(this.platformId)) return;

  const token = localStorage.getItem('token');
  if (!token) return;

  this.http.get<any[]>('http://localhost:3000/api/solicitudes', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).subscribe({
    next: (data) => {
      this.sugerencias = data;
    },
    error: (err) => {
      console.error('Error al cargar sugerencias', err);
    }
  });
}

  
abrirModalAgregar(sugerencia: any): void {
  this.sugerenciaSeleccionada = { ...sugerencia };
  const modalElement = document.getElementById('modalAgregarRepertorio');
  if (modalElement) {
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal.show();
  }
}


confirmarAgregar(): void {
  const id = this.sugerenciaSeleccionada.id;
  const token = localStorage.getItem('token');

  this.http.post('http://localhost:3000/api/solicitudes/agregar-repertorio', {
    solicitudId: id
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).subscribe({
    next: () => {
      this.sugerencias = this.sugerencias.filter(s => s.id !== id);
      bootstrap.Modal.getInstance(document.getElementById('modalAgregarRepertorio')!)?.hide();
      alert('Canción agregada al repertorio');
    },
    error: (err) => {
      console.error('Error al agregar canción', err);
      alert('No se pudo agregar');
    }
  });
}


  eliminarSugerencia(id: number): void {
    if (confirm('¿Eliminar esta sugerencia?')) {
      this.http.delete(`http://localhost:3000/api/solicitudes/${id}`).subscribe({
        next: () => {
          this.sugerencias = this.sugerencias.filter(s => s.id !== id);
        },
        error: (err: any) => {
          console.error('Error al eliminar sugerencia', err);
          alert('No se pudo eliminar');
        }
      });
    }
  }
}