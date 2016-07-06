import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grocery } from '../grocery.model';

@Component({
    moduleId: module.id,
    selector: 'grocery-item',
    templateUrl: './grocery-item.html',
    styleUrls: ['./grocery-item.css']
})

export class GroceryItem {
    @Input() item:Grocery;
    @Output() removeItemRequest = new EventEmitter();

    private clickedRemove() {
        this.removeItemRequest.emit({
            id: this.item.id
        });
    }
}