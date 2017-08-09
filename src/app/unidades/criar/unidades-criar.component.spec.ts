import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesCriarComponent } from './unidades-criar.component';

describe('UnidadesCriarComponent', () => {
  let component: UnidadesCriarComponent;
  let fixture: ComponentFixture<UnidadesCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadesCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
