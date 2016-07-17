import { Component } from '@angular/core';
import { ItemsService } from './items.service';
import { ItemModel } from './item/item.model';
import { ItemListComponent } from './item-list/';

@Component({
  moduleId: module.id,
  selector: 'items-app',
  templateUrl: 'items.component.html',
  styleUrls: ['items.component.css'],
  directives: [ItemListComponent],
  providers: [ItemsService]
})
export class ItemsAppComponent {
  title = 'My items list:';
  items : ItemModel[];
  itemsService : ItemsService;

  constructor(itemsService:ItemsService) {
    this.itemsService = itemsService;
    this.items = this.itemsService.getItems();
  }

  addItem(itemName:string):void {
    this.itemsService.addItem(itemName);
  }

  removeItem($event):void {
    this.itemsService.removeItem($event.item);
  }

  toggleItem($event):void {
    this.itemsService.toggleItemState($event.item);
  }
}
