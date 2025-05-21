import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QueueItem } from '../interfaces/queue-item.model';

@Injectable({ providedIn: 'root' })
export class ColaReproduccionService {
  private baseUrl = 'http://localhost:3000/api/cola'; // ajústalo si tu prefijo es otro

  constructor(private http: HttpClient) {}

  // GET /api/cola
  getCola(): Observable<QueueItem[]> {
    return this.http.get<QueueItem[]>(`${this.baseUrl}`);
  }

  // POST /api/cola/reproducirAhora
  reproducirAhora(cancionId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/reproducirAhora`, { cancionId });
  }

  // POST /api/cola/agregar
  agregarAlFinal(cancionId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/agregar`, { cancionId });
  }

  // DELETE /api/cola/:id
  eliminarDeCola(itemId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${itemId}`);
  }

  // POST /api/cola/siguiente
  pasarSiguiente(): Observable<any> {
    return this.http.post(`${this.baseUrl}/siguiente`, {});
  }
}
