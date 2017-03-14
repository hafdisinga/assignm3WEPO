import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../sellers.service';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-seller-dlg',
  templateUrl: './seller-dlg.component.html',
  styleUrls: ['./seller-dlg.component.css']
})
export class SellerDlgComponent implements OnInit {

  seller: Seller;

  constructor(private modal: NgbActiveModal) { }

  ngOnInit() {

  }
  
  onConfirm(){
    this.modal.close(this.seller);
  }

  onCancel(){
    this.modal.dismiss();
  }
 
}
