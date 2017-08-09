import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportadorasDetalhesComponent } from './transportadoras-detalhes.component';

describe('TransportadorasDetalhesComponent', () => {
  let component: TransportadorasDetalhesComponent;
  let fixture: ComponentFixture<TransportadorasDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportadorasDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportadorasDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
