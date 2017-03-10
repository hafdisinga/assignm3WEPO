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
  seller: Seller;
  sellerID: string;
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
  }

  onAddNewProduct(){
    const modals = this.modal.open(ProductsDlgComponent);

    modals.result.then(addNewProduct => {
        this.service.addProduct(addNewProduct, this.sellerID).subscribe(result => {
          this.toastrService.success("Ný vara hefur verið búin til");
        });
      });

      modals.componentInstance.product = {
        //name: "",
        //category: "",
        //imagePath: ""
      }
    }
  

}
