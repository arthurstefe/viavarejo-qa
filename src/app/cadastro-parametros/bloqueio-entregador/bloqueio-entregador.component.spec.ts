import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueioEntregadorComponent } from './bloqueio-entregador.component';

describe('BloqueioEntregadorComponent', () => {
  let component: BloqueioEntregadorComponent;
  let fixture: ComponentFixture<BloqueioEntregadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloqueioEntregadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueioEntregadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
