import { Component, OnInit } from '@angular/core'; 
import { SellersService, Seller } from '../sellers.service';
import { Router, RouterLink } from "@angular/router";
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

  }
  
  onAddNewSeller(){
    const modals = this.modal.open(SellerDlgComponent);

    modals.result.then(addNewSeller => {
        this.service.addSeller(addNewSeller).subscribe(result => {
          this.toastrService.success("Nýr seljandi hefur verið búinn til");
          this.service.getSellers().subscribe(result => {
            this.sellers = result;
          });
         
        });
      }).catch(err => {
           this.toastrService.warning("Ekki tókst að bæta við seljanda");
      });
      
      modals.componentInstance.seller = {}
    }

    onEditSeller(sellerInfo: Seller) {

      const modals = this.modal.open(SellerDlgComponent);

      modals.componentInstance.seller = sellerInfo;

      modals.result.then(editSeller => {
        this.service.editSeller(editSeller).subscribe(result => {
             this.toastrService.success("Upplýsingum um seljanda hefur verið breytt");
          });
        }).catch(err => {
           this.toastrService.warning("Ekki tókst að breyta upplýsingum um seljanda");
      });
      
  }
  }

