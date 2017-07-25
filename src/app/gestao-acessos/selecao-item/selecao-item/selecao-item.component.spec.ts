import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoItemComponent } from './selecao-item.component';

describe('SelecaoItemComponent', () => {
  let component: SelecaoItemComponent;
  let fixture: ComponentFixture<SelecaoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecaoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
