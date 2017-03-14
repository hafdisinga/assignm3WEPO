import { Component, OnInit, Input } from '@angular/core';
import { SellersService, Seller, Product } from '../sellers.service';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SellerDetailsComponent } from '../seller-details/seller-details.component';


@Component({
  selector: 'app-products-dlg',
  templateUrl: './products-dlg.component.html',
  styleUrls: ['./products-dlg.component.css']
})
export class ProductsDlgComponent implements OnInit {

  product: Product;

  constructor(private service: SellersService, private modal: NgbActiveModal) { }

  ngOnInit() {

  }

  onConfirm(){
    this.modal.close(this.product);
  }

  onCancel(){
    this.modal.dismiss();
  }

}
