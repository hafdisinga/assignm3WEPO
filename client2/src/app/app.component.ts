import { Component, OnInit } from '@angular/core';
import { SellersService, Seller, Product } from './sellers.service';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private service : SellersService) { }

  ngOnInit() {
    
  };

}



