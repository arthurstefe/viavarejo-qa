import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissoesAcessoComponent } from './permissoes-acesso.component';

describe('PermissoesAcessoComponent', () => {
  let component: PermissoesAcessoComponent;
  let fixture: ComponentFixture<PermissoesAcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissoesAcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissoesAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
