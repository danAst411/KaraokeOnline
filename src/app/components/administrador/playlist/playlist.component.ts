import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { EditarListaDialogoComponent } from '../editar-lista-dialogo/editar-lista-dialogo.component';
import { VerCancionesDialogComponent } from '../ver-cancion-dialogo/ver-cancion-dialogo.component';
import { PlaylistRecomendada } from '../../../interfaces/playlist-recomendadas';

declare var bootstrap: any;
@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})


export class PlaylistComponent implements OnInit {
  listas: any[] = [];
  nuevaLista = { nombre: '' };
  token: string | null = '';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.token = localStorage.getItem('token');
      this.cargarListas();
    }
  }

  getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
  }

  cargarListas(): void {
    this.http.get<PlaylistRecomendada[]>('http://localhost:3000/api/listas-sugeridas', {
      headers: this.getAuthHeaders()
    }).subscribe({
      next: res => {
        console.log('Listas recibidas:', res); // Verifica que vengan con Cancions
        this.listas = res;
      },
      error: err => console.error('Error al cargar listas', err)
    });
    
  }

  crearLista(): void {
    if (!this.nuevaLista.nombre.trim()) return;

    this.http.post('http://localhost:3000/api/listas-sugeridas', this.nuevaLista, {
      headers: this.getAuthHeaders()
    }).subscribe({
      next: () => {
        this.nuevaLista = { nombre: '' };
        this.cargarListas();
      },
      error: (err) => console.error('Error al crear lista', err)
    });
  }

  abrirModalEditar(lista: PlaylistRecomendada): void {
    const dialogRef = this.dialog.open(EditarListaDialogoComponent, {
      width: '600px',
      data: { lista }  // 👈 Aquí debe ir con sus canciones incluidas
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'actualizado') {
        this.cargarListas();
      }
    });
  }
  

  publicarLista(id: number): void {
    this.http.patch(`http://localhost:3000/api/listas-sugeridas/${id}/publicar`, {}, {
      headers: this.getAuthHeaders()
    }).subscribe(() => {
      alert('Lista publicada correctamente');
      this.cargarListas();
    });
  }

  eliminarLista(id: number): void {
    if (!confirm('¿Estás seguro de eliminar esta lista sugerida?')) return;

    this.http.delete(`http://localhost:3000/api/listas-sugeridas/${id}`, {
      headers: this.getAuthHeaders()
    }).subscribe({
      next: () => {
        this.listas = this.listas.filter(l => l.id !== id);
        alert('Lista eliminada');
      },
      error: (err) => {
        console.error('Error al eliminar lista', err);
        alert('No se pudo eliminar la lista');
      }
    });
  }

  abrirModalCanciones(lista: any): void {
    this.dialog.open(VerCancionesDialogComponent, {
      width: '500px',
      data: { lista }
    });
  }
  
}