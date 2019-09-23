import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../entities/item.model';
import { ItemListService } from '../item-list/item-list.service';
import { CartItem } from '../entities/cart.model';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    count: number= 0;

    @Input() item: Item;

    @Output() deleteItemEmitter: EventEmitter<number> = new EventEmitter<number>();
    @Output() updateItemEmitter: EventEmitter<Item> = new EventEmitter<Item>();
    @Output() editItemEmitter: EventEmitter<number> = new EventEmitter<number>();
    @Output() addToCartEmitter: EventEmitter<CartItem> = new EventEmitter<CartItem>();

    constructor(private itemListService: ItemListService) { }
    ngOnInit() {
    }

    //Output
    deleteItem(): void {
        this.deleteItemEmitter.emit(this.item.id);
    }
    //Output
    updateItem(): void {
        this.updateItemEmitter.emit(this.item);
    }
    //Output
    editItem(){
        this.editItemEmitter.emit(this.item.id);
    }
    //Output
    addToCart(item:Item){
        this.addToCartEmitter.emit(new CartItem(item));
    }

    
    incrementQuantity(item:Item){
        if(item.stockAux !== 0){
            item.quantity++;
            item.stockAux--;
        }
    }
    decreaseQuantity(item:Item){
        if(item.stockAux !== 0){
            item.quantity--;
            item.stockAux++;
        }else{
            item.stockAux++;
            item.quantity--;
        }
    }

    decreaseStock(event,item:Item){
        item.stockAux = item.stock;
        if ( event <= item.stockAux && event > 0) {
            item.stockAux = item.stockAux - event;
            return item.stockAux;
        }else if(event < 0){
            return item.stockAux;
        }else if(event == "" ){
            return item.stockAux;
        }
    }

    isEditable(item:Item){
        item.editable = !item.editable;
    }

    isNotEditable(item:Item){
        item.editable=false;
    }

   

}
