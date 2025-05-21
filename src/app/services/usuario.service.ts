import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/api/usuarios';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registrar`, usuario);
  }

  obtenerUsuarios(): Observable<any> {
    let headers = new HttpHeaders();
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return this.http.get(this.apiUrl, { headers });
  }

  renovarUsuario(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/renovar/${id}`, {});
  }

  cancelarSuscripcion(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/cancelar-suscripcion/${id}`, {});
  }
}
