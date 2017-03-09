import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from './sellers.service';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //title = 'app works!';

  /*private sellers: Seller[];
  private seller: Seller;*/

  constructor(private service : SellersService) { }

  ngOnInit() {
    console.log("erum inni appComponent");
   // this.service.getSellers().subscribe(result => {
     // this.sellers = result;
  };

   /* var successHandler = (result) => {
      this.seller = result;
    }

    var errorHandler = (err) => {
      console.log("something failed");
      //birta t.d. alert herna fyrir notandann
    }

    this.service.getSellerById(2).subscribe(successHandler, errorHandler);
  }*/
}



