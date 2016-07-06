import { Injectable } from '@angular/core';
import { Grocery } from '../grocery.model'

@Injectable()
export class GroceryDataProvider {
    private list:Array<Grocery> = []; 
    
    getData() {
        return this.list;
    }

    addItem(data : string) {
        this.list.push(new Grocery(this.list.length + 1, data, false));
    }

    removeItem(id : number) {
        let index:number = this.findItem(id);

        if (index >= 0) {
            this.list.splice(index, 1);
            console.log('item removed!');
        } else {
            console.error('Could not locate item!', id);
        }
    }

    private findItem(id : number) : number{
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id === id) {
                return i;
            }
        }
        return -1;
    }   
}