import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { SellersmockService } from '../sellersmock.service';
import { SellersService, Seller } from '../sellers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService, ToastrConfig } from 'ngx-toastr';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  const mockService = new SellersmockService();

  let mockNgbModal = {
    open: jasmine.createSpy("modal.open"),
    dismiss: jasmine.createSpy("modal.dismiss"),
    close: jasmine.createSpy("modal.close")
  };

  let mockToastr = {
    success: jasmine.createSpy("toastr.success"),
    warning: jasmine.createSpy("toastr.warning"),
    error: jasmine.createSpy("toastr.error")
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardComponent ],
      providers: [{
        provide: SellersService,
        usevalue: mockService
      }, {
        provide: NgbModal,
        usevalue: mockNgbModal
      }, {
        provide: ToastrService,
        usevalue: mockToastr
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
   component.product = {
     id: 1,
     quantityInStock: '100',
     quantitySold: '99',
     price: 200,
     imagePath: 'https://example.com'
   };
    expect(component).toBeTruthy();
  });
});
