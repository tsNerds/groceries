import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ItemComponent, ItemModel } from '../item/';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-item-list',
  templateUrl: 'item-list.component.html',
  styleUrls: ['item-list.component.css'],
  directives: [ItemComponent, 
              ROUTER_DIRECTIVES,
              MD_CARD_DIRECTIVES,
              MD_BUTTON_DIRECTIVES,
              ],
})
export class ItemListComponent {
  @Input() title : string;
  @Input() items : ItemModel[];
  @Input() filteredStatus : number;

  @Output() removeItemEvent = new EventEmitter();
  @Output() nextStatusEvent = new EventEmitter();
  @Output() prevStatusEvent = new EventEmitter();

  constructor() {
  }

  getItemsCounter() : number {
    var len : number = 0;
    this.items.forEach(item => {
      if (item.status === this.filteredStatus) {
        len++;
      }
    });

    return len;
  }

  removeItemClicked(item : ItemModel) : void {
    this.removeItemEvent.emit({
      item: item
    });
  }

  nextStatusClicked(item: ItemModel) : void {
    this.nextStatusEvent.emit({
      item: item
    });
  }

  prevStatusClicked(item: ItemModel) : void {
    this.prevStatusEvent.emit({
      item: item
    });
  }
}
