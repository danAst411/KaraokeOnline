import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/usuarios'; // Cambia la URL según tu API

  constructor(private http: HttpClient) {}

  login(credentials: { correo_electronico: string; contrasena: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);  // Guardar el token
          localStorage.setItem('role', response.role);  // Guardar el rol (suponiendo que la respuesta tiene el campo `role`)
        }
      })
    );
  }

  // Método para obtener el token guardado en el localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Método para obtener el rol guardado
  getRole(): string | null {
    return localStorage.getItem('role');
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
