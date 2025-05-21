import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-ver-cancion-dialogo',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './ver-cancion-dialogo.component.html',
  styles: ``
})
export class VerCancionesDialogComponent {
  constructor(
    @Inject(MatDialogRef) public dialogRef: MatDialogRef<VerCancionesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { lista: any }
  ) {}

  cerrar(): void {
    this.dialogRef.close();
  }
}