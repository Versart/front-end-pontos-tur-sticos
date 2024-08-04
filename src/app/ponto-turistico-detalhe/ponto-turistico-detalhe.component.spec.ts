import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PontoTuristicoDetalheComponent } from './ponto-turistico-detalhe.component';

describe('PontoTuristicoDetalheComponent', () => {
  let component: PontoTuristicoDetalheComponent;
  let fixture: ComponentFixture<PontoTuristicoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PontoTuristicoDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PontoTuristicoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
