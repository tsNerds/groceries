import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-grocery-list',
  templateUrl: 'grocery-list.component.html',
  styleUrls: ['grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  groceries:string[];

  constructor() {
    this.groceries = 'apples beer bread shaworma'.split(' ');
  }

  ngOnInit() {
  }

}
