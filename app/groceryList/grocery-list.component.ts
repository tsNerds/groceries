import { Component, OnInit} from '@angular/core';

import { GroceryItem } from './groceryItem/index'
import { GroceryDataProvider } from './groceryData/grocery-data.provider'

@Component({
    moduleId: module.id,
    selector: 'grocery-list',
    templateUrl: './grocery-list.html',
    directives: [GroceryItem],
    providers: [GroceryDataProvider]
})
export class GroceryList {
    private list:Array<any> = [];
    private itemData:string;
    constructor(private groceryData:GroceryDataProvider) {
        this.list = groceryData.getData();
    }

    addItem() {
        this.groceryData.addItem(this.itemData);
        this.itemData = '';
    }

    itemRequestedRemove(event) {
        console.log(event);
        this.groceryData.removeItem(event.id);
    }
}
