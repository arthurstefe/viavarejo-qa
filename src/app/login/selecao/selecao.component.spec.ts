import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoComponent } from './selecao.component';

describe('SelecaoComponent', () => {
  let component: SelecaoComponent;
  let fixture: ComponentFixture<SelecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
