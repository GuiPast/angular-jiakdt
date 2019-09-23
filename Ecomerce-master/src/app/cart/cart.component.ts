import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../entities/cart.model';
import { CartService } from '../order/cart.service';
import { element } from 'protractor';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	@Input() cart:CartItem[];
//    @Output() itemEmit: EventEmitter<number> = new EventEmitter<number>();
	constructor() { }

	ngOnInit() {

	}

	totalQuantity(){
		return this.cart.reduce((acumulator,cartItem) =>
		 (cartItem.item.quantity+acumulator),0);
	}
	totalPrice(){
		return this.cart.reduce((acumulator,cartItem) =>
		 (cartItem.item.quantity*cartItem.item.price)+acumulator,0);
	}
}
