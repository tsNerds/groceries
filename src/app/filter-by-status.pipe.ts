import { GroceryModel, GroceryStatuses } from './grocery';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByStatus',
  pure: false
})
export class FilterByStatus implements PipeTransform {

  transform(groceries: GroceryModel[], status?: number): GroceryModel[] {
    // no filtering
    if (status === undefined) {
      return groceries;
    }

    return groceries.filter(grocery => grocery.status === status);
  }
}
