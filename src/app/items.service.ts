import { Injectable } from '@angular/core';
import { ItemModel } from './item/';

@Injectable()
export class ItemsService {
  public items : ItemModel[];

  constructor() {
    this.items = [
      new ItemModel('apples', 3),
      new ItemModel('beer', 2, true),
      new ItemModel('bread'),
      new ItemModel('shaworma', 15, true),
    ];
  }

  getItems():ItemModel[] {
    return this.items;
  }

  addItem(itemName:string, itemPrice?:number, selected:boolean=false):void {
    // add the new Item to the top of the list
    this.items.splice(0, 0, new ItemModel(itemName, itemPrice, selected));
  }

  removeItem(item:ItemModel):void {
    let index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  
  toggleItemState(item:ItemModel):void {
    item.selected = !item.selected;
  }

}
