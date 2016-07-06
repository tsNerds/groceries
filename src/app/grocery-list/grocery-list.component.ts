import { Component, Input } from '@angular/core';
import { GroceryComponent, GroceryModel } from '../grocery/';

@Component({
  moduleId: module.id,
  selector: 'app-grocery-list',
  templateUrl: 'grocery-list.component.html',
  styleUrls: ['grocery-list.component.css'],
  directives: [GroceryComponent]
})
export class GroceryListComponent {
  @Input() groceries: GroceryModel[];
}
