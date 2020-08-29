import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComprasComponent } from './form-compras.component';

describe('FormComprasComponent', () => {
  let component: FormComprasComponent;
  let fixture: ComponentFixture<FormComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
