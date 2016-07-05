import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { GroceriesService } from './groceries.service';

describe('Groceries Service', () => {
  beforeEachProviders(() => [GroceriesService]);

  it('should ...',
      inject([GroceriesService], (service: GroceriesService) => {
    expect(service).toBeTruthy();
  }));
});
