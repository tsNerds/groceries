import { Component } from '@angular/core';

import { GroceryList } from './groceryList/grocery-list.component'

@Component({
    selector: 'grocery-list-app',
    template: `
        <grocery-list></grocery-list>
    `,
    directives: [GroceryList],
})
export class GroceryListAppComponent {
    
}
