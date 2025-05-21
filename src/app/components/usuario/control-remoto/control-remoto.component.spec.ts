import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRemotoComponent } from './control-remoto.component';

describe('ControlRemotoComponent', () => {
  let component: ControlRemotoComponent;
  let fixture: ComponentFixture<ControlRemotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlRemotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlRemotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
