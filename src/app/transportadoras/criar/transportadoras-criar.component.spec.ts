import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportadorasCriarComponent } from './transportadoras-criar.component';

describe('TransportadorasCriarComponent', () => {
  let component: TransportadorasCriarComponent;
  let fixture: ComponentFixture<TransportadorasCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportadorasCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportadorasCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
