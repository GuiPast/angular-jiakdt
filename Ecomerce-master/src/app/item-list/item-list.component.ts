import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../entities/item.model';
import { ItemListService } from './item-list.service';
import { CartService } from '../order/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { CartItem } from '../entities/cart.model';
@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
    public show:boolean = true;
    myItem: Item[];

    totalQuantity:number = 0;

    constructor(private itemListService: ItemListService,private toastr: ToastrService,
        private route: ActivatedRoute,
        private router: Router, private cartService: CartService) { }
    ngOnInit() {
        this.getItems();
    }
    
    addItem(item:Item):void{
       this.itemListService.addItem(item).subscribe(() => this.getItems());
    }
    updateItem(item:Item): void{
        this.itemListService.updateItem(item).subscribe(() => this.toastr.success('¡Actualizado!'));        
    }

    deleteItem(id: number): void {
        this.itemListService.deleteItem(id).subscribe(
            () => this.getItems())
    }
    addToCart(cartItem:CartItem,item:Item){
        this.cartService.addItem(cartItem);
        this.totalQuantity= this.totalQuantity+item.quantity;  
    }
    toogle(){
        this.show = !this.show;
    }

    getItems(){
        this.itemListService.getItemList()
        .subscribe( (data: Item[]) => this.myItem = data, error => console.error(error),
            ()=> this.myItem.forEach(element => {
                element.stockAux = element.stock
            })
        );
    }


    mouseEnter(event, item:Item){
        if (!item.selected) {
            item.selected = true;
        }
     }
  
     mouseLeave(event, item:Item){
        if (item.selected) {
            item.selected = false;
        }
    }
    
    editItem(id:number){
        this.router.navigateByUrl('/item/' + id);
    }

    shoppingCart(){
        this.router.navigateByUrl('/cart');
    }
}
