import { Injectable } from '@angular/core';
import { GroceryModel } from './grocery/';

@Injectable()
export class GroceriesService {
  public groceries:GroceryModel[];

  constructor() {
    this.groceries = [
      new GroceryModel('apples', 3),
      new GroceryModel('beer', 2, true),
      new GroceryModel('bread'),
      new GroceryModel('shaworma', 15, true),
    ];
  }

  getGroceries():GroceryModel[] {
    return this.groceries;
  }

  addGrocery(groceryName:string, groceryPrice?:number, selected:boolean=false):void {
    // add the new grocery to the top of the list
    this.groceries.splice(0, 0, new GroceryModel(groceryName, groceryPrice, selected));
  }

  removeGrocery(grocery:GroceryModel):void {
    let index = this.groceries.indexOf(grocery);
    if (index !== -1) {
      this.groceries.splice(index, 1);
    }
  }
  
  toggleGroceryState(grocery:GroceryModel):void {
    grocery.selected = !grocery.selected;
  }

}
