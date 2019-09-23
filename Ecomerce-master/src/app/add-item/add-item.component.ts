import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../entities/item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item: Item;
  @Output() add: EventEmitter<Item> = new EventEmitter<Item>();

  openForm: boolean = false;    

  constructor() { }

  ngOnInit() {
    this.item = new Item();
    this.item.id = null;
    this.item.selected = false;
    this.item.img = "../assets/"
    this.item.quantity = 0;
    this.item.editable = false;
  }
  

  onClickOpenForm(){
    this.openForm = true;
  }

  onClickCloseForm(){
    this.openForm = false;
  }

  onClickSubmit(){
    this.add.emit(this.item);
  }
  
}
