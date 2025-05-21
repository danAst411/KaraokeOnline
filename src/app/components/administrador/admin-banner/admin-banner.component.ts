import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoticiasService, Noticia } from '../../../services/noticias.service';

@Component({
  selector: 'app-admin-banner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './admin-banner.component.html',
  styleUrls: ['./admin-banner.component.css']
})
export class AdminBannerComponent implements OnInit {
  private svc = inject(NoticiasService);
  private fb  = inject(FormBuilder);
  private platformId = inject(PLATFORM_ID);

  noticias: Noticia[] = [];
  editingId: number | null = null;

  form = this.fb.group({
    mensaje: ['', Validators.required],
    orden:   [1, [Validators.required, Validators.min(1)]],
    estado:  [true]
  });

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.load();
    }
  }

  load() {
   this.svc.getAdminNoticias().subscribe({
      next: list => this.noticias = list,
      error: err => console.error('Error al cargar admin noticias:', err)
    });
  }

  startCreate() {
  this.editingId = 0;  // 0 significa “nueva noticia”
  this.form.reset({ mensaje: '', orden: 0, estado: true });
}

  startEdit(n: Noticia) {
    this.editingId = n.id;
    this.form.setValue({ 
      mensaje: n.mensaje, 
      orden:   n.orden, 
      estado:  n.estado 
    });
  }

  save() {
    const raw = this.form.value;
    const payload = {
      mensaje: raw.mensaje ?? '',
      orden: raw.orden ?? 0,
      estado: raw.estado ?? true
    };
    const req = this.editingId
      ? this.svc.updateNoticia(this.editingId, payload)
      : this.svc.createNoticia(payload);

    req.subscribe(() => {
      this.load();
      this.cancel();
    });
  }

  cancel() {
    this.editingId = null;
    this.form.reset();
  }

 

  remove(id: number) {
    this.svc.deleteNoticia(id).subscribe(() => this.load());
  }
}
