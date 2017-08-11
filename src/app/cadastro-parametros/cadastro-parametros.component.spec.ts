import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroParametrosComponent } from './cadastro-parametros.component';

describe('CadastroParametrosComponent', () => {
  let component: CadastroParametrosComponent;
  let fixture: ComponentFixture<CadastroParametrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroParametrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
