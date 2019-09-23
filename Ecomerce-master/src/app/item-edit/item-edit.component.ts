import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemListService } from '../item-list/item-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../entities/item.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-item-edit',
    templateUrl: './item-edit.component.html',
    styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
    item: Item;
    @Output() updateItemEmitter: EventEmitter<Item> = new EventEmitter<Item>();

    constructor(private itemListService: ItemListService, 
        private route: ActivatedRoute, 
        private router: Router,
        private toastr: ToastrService) { }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            const id = params['id'];
            if (id != null) {
                this.getItem(id);
            }
        });
    }

    getItem(id: number) {
        this.itemListService.getItemId(id).subscribe(
            (data: Item) => this.item = data,
            error => console.error(error),
            () => this.toastr.success('¡Cargado!')
        );
    }

    updateItem(item:Item): void{
        this.itemListService.updateItem(item).subscribe(
            () => {this.toastr.success('¡Actualizado!'),this.router.navigateByUrl('/home')}
        );       
    }

    cancel(){
        this.router.navigateByUrl('/home');
    }


}
