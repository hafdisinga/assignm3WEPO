import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../sellers.service';
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsDlgComponent } from '../products-dlg/products-dlg.component';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styleUrls: ['./seller-details.component.css']
})
export class SellerDetailsComponent implements OnInit {

  seller: Seller;
  sellerID: string;

  constructor(private service: SellersService, private router: Router, private route: ActivatedRoute, private modal: NgbModal) { }

  ngOnInit() {
    this.sellerID = this.route.snapshot.params['id'];

    this.service.getSellerById(this.sellerID).subscribe( success => {
      this.seller = success;
      console.log(this.seller.name);
    });
  }

}
