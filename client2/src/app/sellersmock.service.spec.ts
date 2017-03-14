import { TestBed, inject } from '@angular/core/testing';
import { SellersmockService } from './sellersmock.service';
import { SellersService, Seller } from './sellers.service';


describe('SellersmockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellersmockService]
    });
  });

  it('should inject SellersmockService', inject([SellersmockService], (service: SellersmockService) => {
    expect(service).toBeTruthy();
  }));
});
