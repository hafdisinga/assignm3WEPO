import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSellersComponent } from './list-sellers.component';

describe('ListSellersComponent', () => {
  let component: ListSellersComponent;
  let fixture: ComponentFixture<ListSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSellersComponent ]
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
});
