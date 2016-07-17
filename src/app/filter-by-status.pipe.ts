import { GroceryModel } from './grocery';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByStatus',
   pure: false
})
export class FilterByStatus implements PipeTransform {

  transform(groceries: GroceryModel[], selectedValue?: string): GroceryModel[] {
    console.log('selectedValue', selectedValue);
    // no filtering
    if (!selectedValue) {
      return groceries;
    }

    let boolSelectedValue:boolean = selectedValue === 'true'; 

    return groceries.filter(grocery => grocery.selected == boolSelectedValue);
  }

}
