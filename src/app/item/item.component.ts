import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemModel } from './item.model';

@Component({
  moduleId: module.id,
  selector: 'app-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item : ItemModel;
  @Output() nextStatusEvent : EventEmitter<Object> = new EventEmitter();
  
  constructor() {}

  ngOnInit() {
  }

  nextStatusClicked() : void {
    this.nextStatusEvent.emit({
      item: this.item
    });
  }

}
