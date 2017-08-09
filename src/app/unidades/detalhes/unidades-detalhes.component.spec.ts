import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesDetalhesComponent } from './unidades-detalhes.component';

describe('UnidadesDetalhesComponent', () => {
  let component: UnidadesDetalhesComponent;
  let fixture: ComponentFixture<UnidadesDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadesDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
