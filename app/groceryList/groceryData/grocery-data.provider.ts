import { Injectable } from '@angular/core';

@Injectable()
export class GroceryDataProvider {
    private list:Array<any> = [
        {id: 1, data: 'something1'},
        {id: 2, data: 'something2'},
        {id: 3, data: 'something3'},
        {id: 4, data: 'something4'}
    ];
    getData() {
        return this.list;
    }

    addItem(id, data) {
        this.list.push({id: id, data: data});
    }

    removeItem() {

    }
}