import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; //ATH
import { Observable } from 'rxjs/Observable';
import 'rxjs/rx';

export interface Seller {
  id: number;
  name: string;
  category: string;
  imagePath: string;
}

export interface Product {
  
  id: number,
  quantitySold: string,
  price: string,
  product: {
    name: string,
	  //price: string,
    //quantitySold: string,
	  quantityInStock: string,
  	imagePath: string
  }
}


@Injectable()
export class SellersService {

  id: number;
  seller : Seller;

  constructor(private http: Http) {
    
  }

  getSellers() : Observable<Seller[]> {
    return this.http.get("http://localhost:5000/api/sellers").map(response => {
      return <Seller[]> response.json();
    });
  }

  getProducts(id: number) : Observable<Product[]> {
    return this.http.get("http://localhost:5000/api/sellers/" + id + "/products").map(response => {
      console.log(id);
      return <Product[]> response.json();
    });
  }

  getSellerById(id: number) : Observable<Seller> {
    
    return this.http.get("http://localhost:5000/api/sellers/" + id).map(response =>{
      return <Seller> response.json();
    });
  }

   addSeller(sellerInfo: any) : Observable<Seller> {
  
    return this.http.post("http://localhost:5000/api/sellers", sellerInfo).map(response => response.json()) 
   }

   addProduct(productInfo: Product, sellerID : number) : Observable<Seller> {
    return this.http.post("http://localhost:5000/api/sellers/" + String(sellerID) + "/products", productInfo).map(response => response.json()) 
   }

   editSeller(sellerInfo: Seller) : Observable<Seller> {

    return this.http.put('http://localhost:5000/api/sellers/' + String(sellerInfo.id), sellerInfo).map(response => response.json());

  }

  editProduct(productInfo: Product, id: number) : Observable<Seller> {
    const productID = productInfo.id;
    return this.http.put('http://localhost:5000/api/sellers/' + String(id) + '/products/' + String(productID), productInfo).map(response => response.json());
  }

}