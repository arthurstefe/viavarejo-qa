import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoAcessosComponent } from './gestao-acessos.component';

describe('GestaoAcessosComponent', () => {
  let component: GestaoAcessosComponent;
  let fixture: ComponentFixture<GestaoAcessosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestaoAcessosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoAcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
