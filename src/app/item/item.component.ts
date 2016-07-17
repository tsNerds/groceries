import { Component, OnInit, Input } from '@angular/core';
import { ItemModel } from './item.model';

@Component({
  moduleId: module.id,
  selector: 'app-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: ItemModel;
  
  constructor() {}

  ngOnInit() {
  }

}
