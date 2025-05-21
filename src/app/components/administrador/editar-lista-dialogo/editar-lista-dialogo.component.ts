import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import  { Cancion } from '../../../interfaces/cancion';

@Component({
  selector: 'app-editar-lista-dialogo',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule],
  templateUrl: './editar-lista-dialogo.component.html',
  styles: ``
})

export class EditarListaDialogoComponent implements OnInit {
  cancionesDisponibles: Cancion[] = [];
  cancionSeleccionada: Cancion | null = null;
  token: string | null = '';

  constructor(
    public dialogRef: MatDialogRef<EditarListaDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { lista: { id: number, nombre: string, Cancions: Cancion[] } },
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    console.log('🎵 Lista recibida:', this.data.lista);
    console.log('🎶 Canciones:', this.data.lista.Cancions);
  
    this.token = localStorage.getItem('token');
    this.data.lista.Cancions = this.data.lista.Cancions.map(c => this.adaptarCancionBackend(c));

  this.obtenerCanciones();
  }

  private getAuthHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    };
  }

  obtenerCanciones(): void {
    this.http.get<Cancion[]>('http://localhost:3000/api/canciones', this.getAuthHeaders())
      .subscribe({
        next: (res) => this.cancionesDisponibles = res,
        error: (err) => console.error('Error al cargar canciones', err)
      });
  }

  agregarCancion(): void {
  if (!this.cancionSeleccionada) return;

  this.http.post('http://localhost:3000/api/listas-sugeridas/agregar-cancion', {
    listaSugeridaId: this.data.lista.id,
    cancionId: this.cancionSeleccionada.id
  }, this.getAuthHeaders()).subscribe(() => {
    const cancionAdaptada = this.adaptarCancionBackend(this.cancionSeleccionada);
    this.data.lista.Cancions.push(cancionAdaptada);
    this.cancionSeleccionada = null;
  });
}

  
  private adaptarCancionBackend(c: any): Cancion {
    return {
      id: c.id,
      tituloCancion: c.titulo ?? c.tituloCancion,
      artistaCancion: c.artista ?? c.artistaCancion,
      generoCancion: c.genero ?? c.generoCancion,
      linkVideo: c.link ?? c.linkVideo,
      imagenCancion: c.imagenCancion ?? '', // o podrías usar un valor por defecto
      reproducciones: c.numero_de_reproducciones ?? c.reproducciones ?? 0
    };
  }

  quitarCancion(cancionId: number): void {
    this.http.delete('http://localhost:3000/api/listas-sugeridas/quitar-cancion', {
      ...this.getAuthHeaders(),
      body: {
        listaSugeridaId: this.data.lista.id,
        cancionId
      }
    }).subscribe(() => {
      this.data.lista.Cancions = this.data.lista.Cancions.filter((c: any) => c.id !== cancionId); // 👈 Refresca
    });
  }
  

  guardar(): void {
    this.http.put(`http://localhost:3000/api/listas-sugeridas/${this.data.lista.id}`, {
      nombre: this.data.lista.nombre
    }, this.getAuthHeaders()).subscribe({
      next: () => this.dialogRef.close('actualizado'),
      error: (err) => console.error('Error al guardar cambios', err)
    });
  }
}