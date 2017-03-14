import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService, ToastrConfig } from 'ngx-toastr';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { ListSellersComponent } from './list-sellers.component';
import { SellersmockService } from '../sellersmock.service';
import { SellersService, Seller } from '../sellers.service';
import { SellerDlgComponent } from '../seller-dlg/seller-dlg.component';

describe('ListSellersComponent', () => {
  const mockService = new SellersmockService();
  let component: ListSellersComponent;
  let fixture: ComponentFixture<ListSellersComponent>;
  
  
  let mockRouter = { 
    navigate: jasmine.createSpy("navigate")
  };
  
  let mockToastr = {
    success: jasmine.createSpy("toastr.success"),
    error: jasmine.createSpy("toastr.error")
  };
  
  let mockModal = {
    open: jasmine.createSpy("modal.open"),
    dismiss: jasmine.createSpy("modal.dismiss"),
    close: jasmine.createSpy("modal.close")
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSellersComponent ],
      providers: [
        { provide: SellersService,
          usevalue: SellersmockService },
        { provide: NgbModal,
          usevalue: mockModal },
        { provide: Router,
          usevalue: mockRouter },
        { provide: ToastrService, 
          usevalue: mockToastr }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Velkomin/n í netverslun okkar'`, async(() => {
    const fixture = TestBed.createComponent(ListSellersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Velkomin/n í netverslun okkar');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(ListSellersComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Velkomin/n í netverslun okkar');
  }));
});
