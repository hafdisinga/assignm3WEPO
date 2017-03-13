import { Component, OnInit } from '@angular/core';
import { SellersService, Seller, Product } from '../sellers.service';
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsDlgComponent } from '../products-dlg/products-dlg.component';
import { ToastrService, ToastrConfig } from 'ngx-toastr';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styleUrls: ['./seller-details.component.css']
})
export class SellerDetailsComponent implements OnInit {

  products: Product[];
  topProducts: Product[];
  seller: Seller;
  sellerID: number;
  product: Product;

  constructor(private service: SellersService, private router: Router, private route: ActivatedRoute, private modal: NgbModal, private toastrService: ToastrService, private toastrConfig: ToastrConfig) { 
    toastrConfig.timeOut = 2500;
    toastrConfig.maxOpened = 0;
  }

  ngOnInit() {
    this.sellerID = this.route.snapshot.params['id'];

    this.service.getSellerById(this.sellerID).subscribe( success => {
      this.seller = success;
      console.log(this.seller.name);
    });

    this.service.getProducts(this.sellerID).subscribe (result => {
      this.products = result;
    });

    this.service.getProducts(this.sellerID).subscribe(result => {
      this.products = result;
      this.topProducts = this.products.slice(0);
      this.topProducts.sort((a, b) => {
        if(a.price === b.price){
          return 0;
        }
        if(a.price < b.price){
          return 1;
        }
        if(a.price > b.price){
          return -1;
        }
      });

     // result.splice(10);
      this.topProducts = this.topProducts.slice(0,10);
    }); 
  }

   openProducts(evt, cityName) {

    document.getElementById("defaultOpen").click();
     
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
}

  onAddNewProduct(){
    const modals = this.modal.open(ProductsDlgComponent);

    modals.result.then(addNewProduct => {
        this.service.addProduct(addNewProduct, this.sellerID).subscribe(result => {
          this.toastrService.success("Ný vara hefur verið búin til");
          this.service.getProducts(this.sellerID).subscribe(result => {
            console.log(this.sellerID);
            this.products = result;
          });
        });
      }).catch(err => {
           this.toastrService.warning("Ekki tókst að bæta við vöru");
      });

      modals.componentInstance.product = {}

    }
    onEditProduct(productInfo: Product) {

      const modals = this.modal.open(ProductsDlgComponent);

      modals.componentInstance.product = productInfo;

      modals.result.then(editProduct => {
        this.service.editProduct(productInfo, this.sellerID).subscribe(result => {
             this.toastrService.success("Upplýsingum um vöru hefur verið breytt");
          });
        }).catch(err => {
           this.toastrService.warning("Ekki tókst að breyta upplýsingum um vöru");
      });
      
  }


}
