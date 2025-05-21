// src/app/services/noticias.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Noticia {
  id: number;
  mensaje: string;
  orden: number;
  estado: boolean;
}

@Injectable({ providedIn: 'root' })
export class NoticiasService {
  private baseUrl = 'http://localhost:3000/api/noticias';

  constructor(private http: HttpClient) {}

  /** Público */
  getNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.baseUrl);
  }

  /** Admin */
  getAdminNoticias(): Observable<Noticia[]> {
    // Si no existe window (SSR), no añadimos headers
    let headers = new HttpHeaders();
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return this.http.get<Noticia[]>(`${this.baseUrl}/admin`, { headers });
  }
  
  createNoticia(n: Partial<Noticia>): Observable<Noticia> {
    return this.http.post<Noticia>(`${this.baseUrl}/admin`, n, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  }

  updateNoticia(id: number, n: Partial<Noticia>): Observable<Noticia> {
    return this.http.put<Noticia>(`${this.baseUrl}/admin/${id}`, n, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  }

  deleteNoticia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/admin/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  }
}
