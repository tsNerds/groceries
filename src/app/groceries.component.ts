import { Component } from '@angular/core';
import { GroceriesService } from './groceries.service';
import { GroceryModel, GroceryStatuses } from './grocery';
import { GroceryListComponent } from './grocery-list/';
import { FilterByStatus } from './filter-by-status.pipe';
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
  providers: [GroceriesService],
  pipes: [FilterByStatus]
})
export class GroceriesAppComponent {
  title = 'My grocery list';
  groceries:GroceryModel[];
  groceriesService:GroceriesService;
  kanbanColumns:any[];

  constructor(groceriesService:GroceriesService) {
    this.groceriesService = groceriesService;
    this.groceries = this.groceriesService.getGroceries();

    this.kanbanColumns = [
      {
        title: 'new',
        status: GroceryStatuses.New
      },
      {
        title: 'in progress',
        status: GroceryStatuses.InProgress
      },
      {
        title: 'done',
        status: GroceryStatuses.Done
      }
    ];
    
  }

  addGrocery(groceryName:string):void {
    this.groceriesService.addGrocery(groceryName);
  }

  moveLeft($event):void {
    let newStatus:number = $event.grocery.status - 1;
    this.groceriesService.setGroceryStaus($event.grocery, newStatus);
  }

  moveRight($event):void {
    let newStatus:number = $event.grocery.status + 1;
    this.groceriesService.setGroceryStaus($event.grocery, newStatus);
  }
}
