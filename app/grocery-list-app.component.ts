import { Component } from '@angular/core';

import { GroceryList } from './groceryList/grocery-list.component'
import { GroceryDataProvider } from './groceryList/groceryData/grocery-data.provider'
import { Grocery } from './groceryList/grocery.model'

@Component({
    moduleId: module.id,
    selector: 'grocery-list-app',
    templateUrl: './grocery-list-app.html',
    directives: [GroceryList],
    providers: [GroceryDataProvider]
})
export class GroceryListAppComponent {
    private list:Array<any>;
    constructor(private groceryData:GroceryDataProvider) {
        this.list = groceryData.getData();
    }

    addNewItem(event:any) {
        this.groceryData.addItem(event.description);
    }

    removeItemRequested(event:any) {
        this.groceryData.removeItem(event.id);
    }
}
