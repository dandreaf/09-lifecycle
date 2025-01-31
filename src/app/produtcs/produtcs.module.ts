import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutcsRoutingModule } from './produtcs-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { PriceComponent } from './components/price/price.component';


@NgModule({
  declarations: [
    ProductComponent,
    PriceComponent
  ],
  imports: [
    CommonModule,
    ProdutcsRoutingModule
  ]
})
export class ProdutcsModule { }
