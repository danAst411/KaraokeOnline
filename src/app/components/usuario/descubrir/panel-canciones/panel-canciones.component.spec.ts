import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCancionesComponent } from './panel-canciones.component';

describe('PanelCancionesComponent', () => {
  let component: PanelCancionesComponent;
  let fixture: ComponentFixture<PanelCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelCancionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
