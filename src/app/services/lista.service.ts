import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ListaService {
  private baseUrl = 'http://localhost:3000/api/listas';
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId); // Detecta entorno navegador
  }

  private getAuthHeaders(): { headers: HttpHeaders } {
    let token = '';
    if (isPlatformBrowser(this.platformId)) {
      token = localStorage.getItem('token') || '';
    }

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  obtenerListasUsuario(): Observable<any> {
    return this.http.get('http://localhost:3000/api/listas/usuario', this.getAuthHeaders());
  }
}