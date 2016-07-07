import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Grocery } from '../grocery.model';

@Component({
    moduleId: module.id,
    selector: 'grocery-item',
    templateUrl: './grocery-item.html',
    styleUrls: ['./grocery-item.css']
})

export class GroceryItem {
    @Input() item: Grocery;
    @Input() selectedFilter: boolean;
    @Output() removeItemRequest = new EventEmitter();

    private isVisible: boolean = true;
    private clickedRemove() {
        this.removeItemRequest.emit({
            id: this.item.id
        });
    }

    constructor() {
    }

    ngOnInit() {
        
    }
}