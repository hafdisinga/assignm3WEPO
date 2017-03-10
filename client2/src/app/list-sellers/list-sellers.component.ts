import { Component, OnInit } from '@angular/core'; 
import { SellersService, Seller } from '../sellers.service';
import { Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SellerDlgComponent } from '../seller-dlg/seller-dlg.component';

@Component({
  selector: 'app-list-sellers',
  templateUrl: './list-sellers.component.html',
  styleUrls: ['./list-sellers.component.css']
})
export class ListSellersComponent implements OnInit {
  title = 'Welcome to our online store';

  private sellers: Seller[];
  //private seller: Seller;

  constructor(private service : SellersService, private router: Router, private modal: NgbModal) { }

  ngOnInit() {
    console.log("erum inni list-sellers");
    this.service.getSellers().subscribe(result => {
      this.sellers = result;
    });

  /*  var successHandler = (result) => {
      this.seller = result;
    };*/

   /* var errorHandler = (err) => {
      console.log("something failed");
      //birta t.d. alert herna fyrir notandann
    };*/

   // this.service.getSellerById('2').subscribe(successHandler, errorHandler);
  }
  
  onAddNewSeller(){
    const modals = this.modal.open(SellerDlgComponent);

    modals.result.then(addNewSeller => {
        this.service.addSeller(addNewSeller).subscribe(result => {

        });
      });

      modals.componentInstance.seller = {
        //name: "",
        //category: "",
        //imagePath: ""
      }
    }
  }

