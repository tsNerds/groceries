import { GroceryStatuses } from './grocery-statuses.enum';

export class GroceryModel {
    public status:number = GroceryStatuses.New;

    constructor(
        public name:string, 
        public price?:number, 
        public selected?:boolean) {}
}
