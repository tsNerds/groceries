import { Component, OnInit } from '@angular/core';
import { GroceryModel } from '../grocery/grocery.model';
import { GroceryComponent } from '../grocery/';
import { GroceriesService } from '../groceries.service';

@Component({
  moduleId: module.id,
  selector: 'app-grocery-list',
  templateUrl: 'grocery-list.component.html',
  styleUrls: ['grocery-list.component.css'],
  directives: [GroceryComponent],
  providers: [GroceriesService]
})
export class GroceryListComponent implements OnInit {
  groceries:GroceryModel[];

  constructor(groceriesService:GroceriesService) {
    this.groceries = groceriesService.getGroceries();
    // console.log(groceriesService);
  }

  ngOnInit() {
  }

}
