import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportadorasEditarComponent } from './transportadoras-editar.component';

describe('TransportadorasEditarComponent', () => {
  let component: TransportadorasEditarComponent;
  let fixture: ComponentFixture<TransportadorasEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportadorasEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportadorasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
