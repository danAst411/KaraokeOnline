import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCancionesComponent } from './mis-canciones.component';

describe('MisCancionesComponent', () => {
  let component: MisCancionesComponent;
  let fixture: ComponentFixture<MisCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisCancionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
