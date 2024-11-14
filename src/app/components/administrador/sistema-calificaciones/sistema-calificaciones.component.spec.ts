import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaCalificacionesComponent } from './sistema-calificaciones.component';

describe('SistemaCalificacionesComponent', () => {
  let component: SistemaCalificacionesComponent;
  let fixture: ComponentFixture<SistemaCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaCalificacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
