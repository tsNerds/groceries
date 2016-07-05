import { Component, OnInit, Input } from '@angular/core';
import { GroceryModel } from './grocery.model';

@Component({
  moduleId: module.id,
  selector: 'app-grocery',
  templateUrl: 'grocery.component.html',
  styleUrls: ['grocery.component.css']
})
export class GroceryComponent implements OnInit {

  @Input()
  grocery: GroceryModel;
  
  constructor() {}

  ngOnInit() {
  }

}
