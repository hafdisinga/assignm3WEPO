import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../sellers.service';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-seller-dlg',
  templateUrl: './seller-dlg.component.html',
  styleUrls: ['./seller-dlg.component.css']
})
export class SellerDlgComponent implements OnInit {

  seller: Seller;

  constructor(private modal: NgbActiveModal) { }

  ngOnInit() {
    console.log("erum inni seller-dlg");
  }
  
  onConfirm(){
    this.modal.close(this.seller);
  }

  onCancel(){
    this.modal.dismiss();
  }
 
}
