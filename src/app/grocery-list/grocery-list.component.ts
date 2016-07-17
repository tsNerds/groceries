import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MdCard } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';

import { GroceryComponent, GroceryModel } from '../grocery/';

@Component({
  moduleId: module.id,
  selector: 'app-grocery-list',
  templateUrl: 'grocery-list.component.html',
  styleUrls: ['grocery-list.component.css'],
  directives: [MdCard, MdButton, GroceryComponent]
})
export class GroceryListComponent {
  @Input()
  groceries: GroceryModel[];

  @Output() 
  removeGroceryIntent = new EventEmitter();

  @Output() 
  toggleGroceryIntent = new EventEmitter();

  removeGrocery(grocery:GroceryModel):void {
    this.removeGroceryIntent.emit({
      grocery: grocery
    });
  }

  toggleGroceryState(grocery:GroceryModel):void {    
    this.toggleGroceryIntent.emit({
      grocery: grocery
    });
  }
}
