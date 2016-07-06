import { Component } from '@angular/core';

@Component({
    selector: 'data-item',
    templateUrl: 'app/data/data.html'
})
export class DataItem {
    private list:Array<any> = [
        {id: 1, data: 'something1'},
        {id: 2, data: 'something2'},
        {id: 3, data: 'something3'},
        {id: 4, data: 'something4'}
    ];
    constructor() {

    }
}
