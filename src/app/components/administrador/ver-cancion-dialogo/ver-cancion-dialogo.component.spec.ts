import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCancionDialogoComponent } from './ver-cancion-dialogo.component';

describe('VerCancionDialogoComponent', () => {
  let component: VerCancionDialogoComponent;
  let fixture: ComponentFixture<VerCancionDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerCancionDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCancionDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
