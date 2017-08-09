import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportadorasComponent } from './transportadoras.component';

describe('TransportadorasComponent', () => {
  let component: TransportadorasComponent;
  let fixture: ComponentFixture<TransportadorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportadorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});