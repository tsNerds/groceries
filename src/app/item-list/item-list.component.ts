import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemComponent, ItemModel } from '../item/index';

@Component({
  moduleId: module.id,
  selector: 'app-item-list',
  templateUrl: 'item-list.component.html',
  styleUrls: ['item-list.component.css'],
  directives: [ItemComponent]
})
export class ItemListComponent {
  @Input() items: ItemModel[];

  @Output() removeItemIntent = new EventEmitter();

  @Output() toggleItemIntent = new EventEmitter();

  constructor() {

  }

  removeItem(item:ItemModel):void {
    this.removeItemIntent.emit({
      item: item
    });
  }

  toggleItemState(item:ItemModel):void {
    console.log('emit toggle');
    
    this.toggleItemIntent.emit({
      item: item
    });
  }
}
