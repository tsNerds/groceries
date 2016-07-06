import { Component } from '@angular/core';

import { DataItem } from './data/data.component'

@Component({
    selector: 'grocery-list-app',
    template: `
        <data-item></data-item>
    `,
    directives: [DataItem],
})
export class GroceryListAppComponent {
    
}
