import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'grocery-item',
    templateUrl: './grocery-item.html'
})

export class GroceryItem {
    @Input() item:any;
    @Output() removeItemRequest = new EventEmitter();

    clickedRemove() {
        this.removeItemRequest.emit({
            id: this.item.id
        });
    }
}