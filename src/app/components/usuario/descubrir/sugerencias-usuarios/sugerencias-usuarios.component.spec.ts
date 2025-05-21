import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerenciasUsuariosComponent } from './sugerencias-usuarios.component';

describe('SugerenciasUsuariosComponent', () => {
  let component: SugerenciasUsuariosComponent;
  let fixture: ComponentFixture<SugerenciasUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugerenciasUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugerenciasUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
