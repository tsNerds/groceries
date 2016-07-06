import { Injectable } from '@angular/core';

@Injectable()
export class GroceryDataProvider {
    private list:Array<any> = [];
    getData() {
        return this.list;
    }

    addItem(data:string) {
        this.list.push({id: this.list.length + 1, data: data});
    }

    removeItem(id:number) {

    }
}