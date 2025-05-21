// banner-noticias.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NoticiasService, Noticia } from '../../../services/noticias.service';

@Component({
  selector: 'app-banner-noticias',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './banner-noticias.component.html',
  styleUrls: ['./banner-noticias.component.css']
})
export class BannerNoticiasComponent implements OnInit {
  private svc = inject(NoticiasService);
  noticias: Noticia[] = [];

  ngOnInit() {
    this.svc.getNoticias().subscribe({
      next: data => this.noticias = data.sort((a, b) => a.orden - b.orden),
      error: err => console.error('Error cargando noticias', err)
    });
  }
}
