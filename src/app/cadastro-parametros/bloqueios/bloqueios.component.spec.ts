import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueiosComponent } from './bloqueios.component';

describe('BloqueiosComponent', () => {
  let component: BloqueiosComponent;
  let fixture: ComponentFixture<BloqueiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloqueiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
