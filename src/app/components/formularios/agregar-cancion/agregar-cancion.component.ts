import { GenerosComponent } from './../../usuario/descubrir/generos/generos.component';
import { Cancion } from './../../../interfaces/cancion';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-cancion',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './agregar-cancion.component.html',
  styleUrl: './agregar-cancion.component.css'
})
export class AgregarCancionComponent implements OnInit {
  linkVideo: string = '';
  tituloCancion: string = '';
  artistaCancion: string = '';
  generoCancion: string = '';
  
  formCancion: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formCancion = this.fb.group({
      linkVideoBD: ['', Validators.required],
      imagenCancionBD: ['', Validators.required],
      tituloCancionBD: ['', Validators.required],
      artistaCancionBD: ['', Validators.required],
      generoCancionBD: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Puedes inicializar valores aquí si es necesario
  }

  agregarCancion() {
    // Verificar si el formulario es válido
    if (this.formCancion.invalid) {
      alert('Debes completar todos los campos para agregar una canción.');
      return;
    }
    const Cancion: Cancion = {
      id: 0, // Assign a proper id value
      reproducciones: 0, // Assign a proper reproducciones value
      linkVideo: this.formCancion.value.linkVideoBD,
      imagenCancion: this.formCancion.value.imagenCancionBD,
      tituloCancion: this.formCancion.value.tituloCancionBD,
      artistaCancion: this.formCancion.value.artistaCancionBD,
      generoCancion: this.formCancion.value.generoCancionBD,
    };
    // Mostrar los datos extraídos del enlace
    alert(`Título: ${this.tituloCancion}\nArtista: ${this.artistaCancion}\nGénero: ${this.generoCancion}`);
  }

  verificarLink() {
    // Patrón para el enlace: vimeo.com/titulo_artista_genero
    const regex = /vimeo\.com\/([^_]+)_([^_]+)_(.+)/;

    // Intentar extraer datos del enlace ingresado
    const match = this.linkVideo.match(regex);
    if (match) {
      this.tituloCancion = this.formatearTitulo(match[1]); // Extraer y formatear título
      this.artistaCancion = this.formatearTexto(match[2]); // Extraer y formatear artista
      this.generoCancion = this.formatearTexto(match[3]); // Extraer y formatear género
    } else {
      alert('El formato del enlace no es válido. Asegúrate de usar el formato correcto.');
    }
  }

  private formatearTitulo(texto: string): string {
    return texto
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Agrega espacio entre palabras camelCase
      .replace(/_/g, ' ') // Reemplaza guiones bajos por espacios
      .toLowerCase() // Convierte todo a minúsculas
      .replace(/\b\w/g, (letra) => letra.toUpperCase()) // Capitaliza cada palabra
      .replace(/\b(A|De|En|Y|Con|Por|Para|El|La|Los|Las)\b/g, (palabra) => palabra.toLowerCase()) // Minúscula para preposiciones y artículos
      .replace(/^\w/, (letra) => letra.toUpperCase()) // Capitaliza solo la primera palabra del título
      .trim(); // Elimina espacios innecesarios
  }

  private formatearTexto(texto: string): string {
    return texto
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Agrega espacio entre palabras camelCase
      .replace(/_/g, ' ') // Reemplaza guiones bajos por espacios
      .toLowerCase() // Convierte todo a minúsculas
      .replace(/\b\w/g, (letra) => letra.toUpperCase()) // Capitaliza cada palabra
      .trim(); // Elimina espacios innecesarios
  }
}