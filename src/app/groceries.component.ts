import { Component } from '@angular/core';
import { GroceriesService } from './groceries.service';
import { GroceryModel } from './grocery/grocery.model';
import { GroceryListComponent } from './grocery-list/';
import { MdInput } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';
import { MdCard } from '@angular2-material/card';
import { MdToolbar } from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'groceries-app',
  templateUrl: 'groceries.component.html',
  styleUrls: ['groceries.component.css'],
  directives: [GroceryListComponent, MdInput, MdButton, MdCard, MdToolbar],
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

  toggleGrocery($event):void {
    this.groceriesService.toggleGroceryState($event.grocery);
  }
}
