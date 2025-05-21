import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaReproduccionComponent } from './cola-reproduccion.component';

describe('ColaReproduccionComponent', () => {
  let component: ColaReproduccionComponent;
  let fixture: ComponentFixture<ColaReproduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaReproduccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaReproduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
