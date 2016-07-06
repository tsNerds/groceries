import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'grocery-item',
    template: '{{item.id}} {{item.data}}'
})

export class GroceryItem {
    @Input() item:any;
}