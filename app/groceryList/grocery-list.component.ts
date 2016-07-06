import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'grocery-list',
    templateUrl: './grocery-list.html'
})
export class GroceryList {
    private list:Array<any> = [
        {id: 1, data: 'something1'},
        {id: 2, data: 'something2'},
        {id: 3, data: 'something3'},
        {id: 4, data: 'something4'}
    ];
    constructor() {

    }
}
