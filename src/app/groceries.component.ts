import { Component } from '@angular/core';
import { GroceryListComponent } from './grocery-list/';

@Component({
  moduleId: module.id,
  selector: 'groceries-app',
  templateUrl: 'groceries.component.html',
  styleUrls: ['groceries.component.css'],
  directives: [GroceryListComponent]
})
export class GroceriesAppComponent {
  title = 'My grocery list:';
}
