import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarNovoComponent } from './adicionar-novo.component';

describe('AdicionarNovoComponent', () => {
  let component: AdicionarNovoComponent;
  let fixture: ComponentFixture<AdicionarNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
