import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; //ATH
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

   updateSeller(sellerInfo: Seller, id : string) : Observable<Seller> {

    /*let bodyString = JSON.stringify(sellerInfo); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put('http://localhost:5000/api/sellers/' + id , sellerInfo, options) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors*/

    return this.http.put('http://localhost:5000/api/sellers/' + (sellerInfo.id), sellerInfo).map(response => response.json());

  }

  updateProduct(sellerID: Seller, productID: Product ) : Observable<Seller> {

    /*let bodyString = JSON.stringify(sellerInfo); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put('http://localhost:5000/api/sellers/' + id , sellerInfo, options) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors*/

    return this.http.put('http://localhost:5000/api/sellers/' + (sellerID.id) + "/products/" + (productID.id), sellerID).map(response => response.json());

  }

}