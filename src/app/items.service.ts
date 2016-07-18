import { Injectable } from '@angular/core';
import { ItemModel } from './item/';

@Injectable()
export class ItemsService {
  public items : ItemModel[];

  constructor() {
    this.items = [
      new ItemModel('apples'),
      new ItemModel('beer'),
      new ItemModel('bread'),
      new ItemModel('shaworma'),
    ];
  }

  getItems():ItemModel[] {
    return this.items;
  }

  addItem(itemName : string) : void {
    // add the new Item to the top of the list
    this.items.splice(0, 0, new ItemModel(itemName));
  }

  removeItem(item : ItemModel) : void {
    let index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  changeItemStatus(item : ItemModel) : void {
    item.incrementStatus();
  }
}
