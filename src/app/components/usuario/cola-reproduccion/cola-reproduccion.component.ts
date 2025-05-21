import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ColaReproduccionService } from '../../../services/cola-reproduccion.service';
import { QueueItem } from '../../../interfaces/queue-item.model';

@Component({
  selector: 'app-cola-reproduccion',
  standalone: true,
  // …imports…
  templateUrl: './cola-reproduccion.component.html',
})
export class ColaReproduccionComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  cola: QueueItem[] = [];

  constructor(private colaService: ColaReproduccionService) {}

  ngOnInit(): void {
    // Solo en browser hacemos el GET
    if (isPlatformBrowser(this.platformId)) {
      this.cargarCola();
    }
  }

  cargarCola(): void {
    this.colaService.getCola().subscribe(items => this.cola = items);
  }

  onPlay(item: QueueItem): void {
    this.colaService.reproducirAhora(item.cancion.id)
      .subscribe(() => this.cargarCola());
  }

  onRemove(item: QueueItem): void {
    this.colaService.eliminarDeCola(item.id)
      .subscribe(() => this.cargarCola());
  }

  openAddSong(): void {
    // redirige a tu buscador de canciones, o abre un modal
    
  }
}
