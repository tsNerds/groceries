import { Component } from '@angular/core';
import { GroceriesService } from './groceries.service';
import { GroceryModel } from './grocery/grocery.model';
import { GroceryListComponent } from './grocery-list/';

@Component({
  moduleId: module.id,
  selector: 'groceries-app',
  templateUrl: 'groceries.component.html',
  styleUrls: ['groceries.component.css'],
  directives: [GroceryListComponent],
  providers: [GroceriesService]
})
export class GroceriesAppComponent {
  title = 'My grocery list:';
  groceries:GroceryModel[];
  groceriesService:GroceriesService;

  constructor(groceriesService:GroceriesService) {
    this.groceriesService = groceriesService;
    this.groceries = this.groceriesService.getGroceries();
  }

  addGrocery(groceryName:string):void {
    this.groceriesService.addGrocery(groceryName);
  }

  removeGrocery($event):void {
    this.groceriesService.removeGrocery($event.grocery);
  }
}
