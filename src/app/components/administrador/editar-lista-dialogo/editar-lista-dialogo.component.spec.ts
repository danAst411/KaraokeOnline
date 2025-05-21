import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarListaDialogoComponent } from './editar-lista-dialogo.component';

describe('EditarListaDialogoComponent', () => {
  let component: EditarListaDialogoComponent;
  let fixture: ComponentFixture<EditarListaDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarListaDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarListaDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
