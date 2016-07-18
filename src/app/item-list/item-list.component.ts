import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemComponent, ItemModel } from '../item/';

@Component({
  moduleId: module.id,
  selector: 'app-item-list',
  templateUrl: 'item-list.component.html',
  styleUrls: ['item-list.component.css'],
  directives: [ItemComponent]
})
export class ItemListComponent {
  @Input() title : string;
  @Input() items : ItemModel[];
  @Input() filteredStatus : number;

  @Output() removeItemEvent = new EventEmitter();
  @Output() nextStatusEvent = new EventEmitter();

  removeItem(item : ItemModel) : void {
    this.removeItemEvent.emit({
      item: item
    });
  }

  nextStatusRequested(event) : void {
    this.nextStatusEvent.emit(event);
  }
}
