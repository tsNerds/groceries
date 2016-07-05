import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GroceriesAppComponent } from '../app/groceries.component';

beforeEachProviders(() => [GroceriesAppComponent]);

describe('App: Groceries', () => {
  it('should create the app',
      inject([GroceriesAppComponent], (app: GroceriesAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'groceries works!\'',
      inject([GroceriesAppComponent], (app: GroceriesAppComponent) => {
    expect(app.title).toEqual('groceries works!');
  }));
});
