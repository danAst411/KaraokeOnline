import { Component, OnInit } from '@angular/core';
import { ListaCancionesComponent } from "../lista-canciones/lista-canciones.component";
import { ListaService } from './../../../services/lista.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mis-canciones',
  standalone: true,
  imports: [ListaCancionesComponent, CommonModule],
  templateUrl: './mis-canciones.component.html',
  styleUrl: './mis-canciones.component.css'
})
export class MisCancionesComponent implements OnInit {
  listas: any[] = [];

  constructor(private listaService: ListaService) {}

  ngOnInit(): void {
    this.cargarListas();
  }

  cargarListas(): void {
    this.listaService.obtenerListasUsuario().subscribe({
      next: (res) => this.listas = res,
      error: (err) => console.error('Error al obtener listas', err)
    });
  }
}