import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaCancionesComponent } from './busqueda-canciones.component';

describe('BusquedaCancionesComponent', () => {
  let component: BusquedaCancionesComponent;
  let fixture: ComponentFixture<BusquedaCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaCancionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
