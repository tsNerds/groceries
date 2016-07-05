import { Injectable } from '@angular/core';
import { GroceryModel } from './grocery/';

@Injectable()
export class GroceriesService {
  public groceries:GroceryModel[];

  constructor() {
    this.groceries = [
      new GroceryModel('apples', 3),
      new GroceryModel('beer', 2),
      new GroceryModel('bread'),
      new GroceryModel('shaworma', 15),
    ];
  }

  getGroceries():GroceryModel[] {
    return this.groceries;
  }

}
