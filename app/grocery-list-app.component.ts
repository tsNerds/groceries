import { Component } from '@angular/core';

import { GroceryList } from './groceryList/grocery-list.component'

@Component({
    moduleId: module.id,
    selector: 'grocery-list-app',
    templateUrl: './grocery-list-app.html',
    directives: [GroceryList],
})
export class GroceryListAppComponent {
    
}
