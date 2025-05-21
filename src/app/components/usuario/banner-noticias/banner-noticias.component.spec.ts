import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNoticiasComponent } from './banner-noticias.component';

describe('BannerNoticiasComponent', () => {
  let component: BannerNoticiasComponent;
  let fixture: ComponentFixture<BannerNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerNoticiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
