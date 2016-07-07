import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { GroceryItem } from './groceryItem/index'
import { Grocery } from './grocery.model'

@Component({
    moduleId: module.id,
    selector: 'grocery-list',
    templateUrl: './grocery-list.html',
    styleUrls: ['./grocery-list.css'],
    directives: [GroceryItem]
})
export class GroceryList {
    @Input() list:Array<Grocery>;
    @Output() addItemRequested = new EventEmitter();
    @Output() removeItemRequested = new EventEmitter();
    
    addItem() {
        this.addItemRequested.emit({
            description: this.itemData 
        });
        this.itemData = '';
    }

    itemRequestedRemove(event:any) {
        this.removeItemRequested.emit(event);
    }

    toggleFilter() {
        this.selectedFilter = !this.selectedFilter;
    }
    
    private selectedFilter:boolean = false;
}
