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
  public title         : string = 'My items list:';
  public items         : ItemModel[];
  public itemsService  : ItemsService;

  constructor(itemsService:ItemsService) {
    this.itemsService = itemsService;
    this.items = this.itemsService.getItems();
  }

  addItem(itemName : string) : void {
    this.itemsService.addItem(itemName);
  }

  removeItem(data : any) : void {
    this.itemsService.removeItem(data.item);
  }
}
