import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosCriarComponent } from './usuarios-criar.component';

describe('UsuariosCriarComponent', () => {
  let component: UsuariosCriarComponent;
  let fixture: ComponentFixture<UsuariosCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
