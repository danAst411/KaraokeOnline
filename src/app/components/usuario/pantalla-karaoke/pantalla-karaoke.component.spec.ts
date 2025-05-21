import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaKaraokeComponent } from './pantalla-karaoke.component';

describe('PantallaKaraokeComponent', () => {
  let component: PantallaKaraokeComponent;
  let fixture: ComponentFixture<PantallaKaraokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaKaraokeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaKaraokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
