import { Component, OnInit, Input, Output } from '@angular/core';
import { CartService } from './cart.service';
import { CartItem } from '../entities/cart.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  cart: CartItem[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.cart
  }

}
