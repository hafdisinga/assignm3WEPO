import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/rx';

export interface Seller {
  id: string;
  name: string;
  category: string;
  imagePath: string;
}

@Injectable()
export class SellersService {

  constructor(private http: Http) {
    
  }

  getSellers() : Observable<Seller[]> {
    return this.http.get("http://localhost:5000/api/sellers").map(response => {
      return <Seller[]> response.json();
    });
  }

  getSellerById(id: string) : Observable<Seller> {
    
    return this.http.get("http://localhost:5000/api/sellers/" + id).map(response =>{
      return <Seller> response.json();
    });
  }

}
