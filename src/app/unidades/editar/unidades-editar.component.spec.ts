import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesEditarComponent } from './unidades-editar.component';

describe('UnidadesEditarComponent', () => {
  let component: UnidadesEditarComponent;
  let fixture: ComponentFixture<UnidadesEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadesEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
