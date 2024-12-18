import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductorComponent } from './reproductor.component';

describe('ReproductorComponent', () => {
  let component: ReproductorComponent;
  let fixture: ComponentFixture<ReproductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReproductorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
