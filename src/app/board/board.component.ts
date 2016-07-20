import { Component } from '@angular/core';
import { ItemsService } from './items.service';
import { ItemModel } from './item/item.model';
import { ItemListComponent } from './item-list/';

@Component({
  moduleId: module.id,
  selector: 'board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.css'],
  directives: [ItemListComponent],
  providers: [ItemsService]
})
export class BoardComponent {
  public items          : ItemModel[];
  public itemsService   : ItemsService;
  public title          : string = 'My items list:';
  public listArray      : Object[] = [
    {
      title:'To Do', 
      status: 0
    },
    {
      title:'Do Today', 
      status: 1
    },
    {
      title:'In progress', 
      status: 2
    },
    {
      title:'Done', 
      status: 3
    },
  ];

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

  nextItemStatus(data : any) : void {
    this.itemsService.nextItemStatus(data.item);
  }

  prevItemStatus(data : any) : void {
    this.itemsService.prevItemStatus(data.item);
  }
}
