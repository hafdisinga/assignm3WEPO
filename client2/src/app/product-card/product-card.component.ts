import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SellersService, Seller, Product } from '../sellers.service';
import { ProductsDlgComponent } from '../products-dlg/products-dlg.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService, ToastrConfig } from 'ngx-toastr';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements OnInit {


  @Input()
  product: Product;

  @Output()
  productUpdated = new EventEmitter();

  constructor(private service: SellersService,  private modal: NgbModal, private toastrService: ToastrService) { }

  ngOnInit() {

  }

  onBtnEdit(){
    const modals = this.modal.open(ProductsDlgComponent);

    modals.componentInstance.product = this.product;

      modals.result.then(editProduct => {
        this.productUpdated.emit(editProduct);
 
      }).catch(err => {
           this.toastrService.warning("Ekki tókst að breyta upplýsingum um vöru");
      });
  }
}
