import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosFuncionalidadesComponent } from './atributos-funcionalidades.component';

describe('AtributosFuncionalidadesComponent', () => {
  let component: AtributosFuncionalidadesComponent;
  let fixture: ComponentFixture<AtributosFuncionalidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtributosFuncionalidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributosFuncionalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
