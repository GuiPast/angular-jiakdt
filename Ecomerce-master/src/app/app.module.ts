import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalPipe } from './total.pipe';
import { SumTotalPipe } from './sum-total.pipe';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemListService } from './item-list/item-list.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { OrderComponent } from './order/order.component';
import { CartService } from './order/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    TotalPipe,
    SumTotalPipe,
    ItemListComponent,
    ItemComponent,
    AddItemComponent,
    ItemEditComponent,
    PageNotFoundComponent,
    CartComponent,
    ShippingComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    routing,
    ReactiveFormsModule
  ],
  providers: [ItemListService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
