import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SellersService, Seller, Product } from '../sellers.service';
import { Router, ActivatedRoute } from "@angular/router";
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SellerDetailsComponent } from '../seller-details/seller-details.component';
import { ModalDirective } from 'ng2-bootstrap/modal';


@Component({
  selector: 'app-products-dlg',
  templateUrl: './products-dlg.component.html',
  styleUrls: ['./products-dlg.component.css']
})
export class ProductsDlgComponent implements OnInit {

  product: Product;
  seller: Seller;

  constructor(private service: SellersService, private router: Router, private route: ActivatedRoute, private modal: NgbActiveModal) { }

  ngOnInit() {
    console.log("erum inni products-dlg");
  }

  onConfirm(){
    this.modal.close(this.product);
  }

  onCancel(){
    this.modal.dismiss();
  }

}
