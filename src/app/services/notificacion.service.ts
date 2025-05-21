import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; // Necesitas instalar ngx-toastr

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(private toastr: ToastrService) {}

  mostrarMensaje(mensaje: string): void {
    this.toastr.warning(mensaje, 'Plan Premium Requerido', {
      timeOut: 3000, // Duración en milisegundos
    });
  }
}
