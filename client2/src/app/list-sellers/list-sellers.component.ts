import { Component, OnInit } from '@angular/core'; 
import { SellersService, Seller } from '../sellers.service';
import { Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SellerDlgComponent } from '../seller-dlg/seller-dlg.component';
import { ToastrService, ToastrConfig } from 'ngx-toastr';


@Component({
  selector: 'app-list-sellers',
  templateUrl: './list-sellers.component.html',
  styleUrls: ['./list-sellers.component.css']
})
export class ListSellersComponent implements OnInit {
  title = 'Velkomin/n í netverslun okkar';

  private sellers: Seller[];
  seller: Seller;

  constructor(private service : SellersService, private router: Router, private modal: NgbModal, private toastrService: ToastrService, private toastrConfig: ToastrConfig) {
    toastrConfig.timeOut = 2500;
    toastrConfig.maxOpened = 0;
   }

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
          this.toastrService.success("Nýr seljandi hefur verið búin til");
          //this.toastrService.info('<span style="color: green">Message in green</span>', null, {enableHtml: true});
        });
      }).catch(err => {
           this.toastrService.warning("Ekki tókst að bæta við seljanda");
      });
      

      modals.componentInstance.seller = {
        name: "",
        category: "",
        imagePath: ""
      }
    }

    onEditSeller(sellerInfo: Seller) {

      const modals = this.modal.open(SellerDlgComponent);

      modals.componentInstance.seller = sellerInfo;
/*
      modals.componentInstance.seller = {
        name: "hehe",
        category: "",
        imagePath: ""
      }
*/
      modals.result.then(editSeller => {
        this.service.updateSeller(editSeller, sellerInfo.id).subscribe(result => {
             this.toastrService.success("Upplýsingar um seljanda hafa verið breyttar");
          });
        }).catch(err => {
           this.toastrService.warning("Ekki tókst að breyta upplýsingum um seljanda");
      });
      
  }
  }

