import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService, ToastrConfig } from 'ngx-toastr';

import { SellerDetailsComponent } from './seller-details.component';
import { SellersmockService } from '../sellersmock.service';
import { SellersService, Seller, Product } from '../sellers.service';


describe('SellerDetailsComponent', () => {
  const mockService = new SellersmockService();
  let component: SellerDetailsComponent;
  let fixture: ComponentFixture<SellerDetailsComponent>;

  let mockRouter = { 
    navigate: jasmine.createSpy("navigate")
  };
  
  let mockToastr = {
    success: jasmine.createSpy("toastr.success"),
    error: jasmine.createSpy("toastr.error")
  };

  let mockToastrConfig = {
    timeOut: jasmine.createSpy("toastrConfig.timeOut")
  };
  
  let mockModal = {
    open: jasmine.createSpy("modal.open"),
    dismiss: jasmine.createSpy("modal.dismiss"),
    close: jasmine.createSpy("modal.close")
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerDetailsComponent ],
      providers: [
        { provide: SellersService,
          usevalue: SellersmockService },
        { provide: NgbModal,
          usevalue: mockModal },
        { provide: Router,
          usevalue: mockRouter },
        { provide: ActivatedRoute,
          usevalue: mockRouter },
        { provide: ToastrService, 
          usevalue: mockToastr },
        { provide: ToastrConfig, 
          usevalue: mockToastrConfig }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
