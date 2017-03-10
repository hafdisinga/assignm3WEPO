import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; //ATH
import { Observable } from 'rxjs/Observable';
import 'rxjs/rx';

export interface Seller {
  id: string;
  name: string;
  category: string;
  imagePath: string;
}

export interface Product {
  
  id: string,
  product: {
    name: string,
	  price: string,
    quantitySold: string,
	  quantityInStock: string,
  	imagePath: string
  }
}


@Injectable()
export class SellersService {

  id: string;

  constructor(private http: Http) {
    
  }

  getSellers() : Observable<Seller[]> {
    return this.http.get("http://localhost:5000/api/sellers").map(response => {
      return <Seller[]> response.json();
    });
  }

  getProducts(id: string) : Observable<Product[]> {
    return this.http.get("http://localhost:5000/api/sellers/" + id + "/products").map(response => {
      return <Product[]> response.json();
    });
  }

  getSellerById(id: string) : Observable<Seller> {
    
    return this.http.get("http://localhost:5000/api/sellers/" + id).map(response =>{
      return <Seller> response.json();
    });
  }

   addSeller(sellerInfo: any) : Observable<Seller> {
    return this.http.post("http://localhost:5000/api/sellers", sellerInfo).map(response => response.json()) 
   }

   addProduct(productInfo: any, id: string) : Observable<Seller> {
    return this.http.post("http://localhost:5000/api/sellers/" + id + "/products", productInfo).map(response => response.json()) 
   }

}