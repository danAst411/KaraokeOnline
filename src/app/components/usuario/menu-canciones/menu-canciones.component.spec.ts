import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCancionesComponent } from './menu-canciones.component';

describe('MenuCancionesComponent', () => {
  let component: MenuCancionesComponent;
  let fixture: ComponentFixture<MenuCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCancionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
