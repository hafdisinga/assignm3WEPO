import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { SellersService } from './sellers.service';
import { SellerDlgComponent } from './seller-dlg/seller-dlg.component';
import { ListSellersComponent } from './list-sellers/list-sellers.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { ProductsDlgComponent } from './products-dlg/products-dlg.component';
import { ProductCardComponent } from './product-card/product-card.component';




@NgModule({
  declarations: [
    AppComponent,
    SellerDlgComponent,
    ListSellersComponent,
    SellerDetailsComponent,
    ProductsDlgComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([{
      path: "",
      redirectTo: "list-sellers",
      pathMatch: "full"
    }, {
      path: "list-sellers",
      component: ListSellersComponent
    }, {
      path: "product-card",
      component: ProductCardComponent
    }, {
      path: "products-dlg",
      component: ProductsDlgComponent
    }, {
      path: "seller-details",
      component: SellerDetailsComponent
    }, {
      path: "seller-dlg",
      component: SellerDlgComponent
    }])
  ],
  providers: [SellersService],
  bootstrap: [AppComponent],
  entryComponents: [SellerDlgComponent]
})
export class AppModule { }
