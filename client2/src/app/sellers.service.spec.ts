import { TestBed, inject } from '@angular/core/testing';
import { SellersService } from './sellers.service';
import { HttpModule } from '@angular/http';

describe('SellersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellersService],
      imports: [HttpModule]
    });
  });

  it('should inject SellersService', inject([SellersService], (service: SellersService) => {
    expect(service).toBeTruthy();
  }));
});
