import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDlgComponent } from './products-dlg.component';

describe('ProductsDlgComponent', () => {
  let component: ProductsDlgComponent;
  let fixture: ComponentFixture<ProductsDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
