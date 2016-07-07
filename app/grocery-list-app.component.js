"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var grocery_list_component_1 = require('./groceryList/grocery-list.component');
var grocery_data_provider_1 = require('./groceryList/groceryData/grocery-data.provider');
var GroceryListAppComponent = (function () {
    function GroceryListAppComponent(groceryData) {
        this.groceryData = groceryData;
        this.list = groceryData.getData();
    }
    GroceryListAppComponent.prototype.addNewItem = function (event) {
        this.groceryData.addItem(event.description);
    };
    GroceryListAppComponent.prototype.removeItemRequested = function (event) {
        this.groceryData.removeItem(event.id);
    };
    GroceryListAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'grocery-list-app',
            templateUrl: './grocery-list-app.html',
            directives: [grocery_list_component_1.GroceryList],
            providers: [grocery_data_provider_1.GroceryDataProvider]
        }), 
        __metadata('design:paramtypes', [grocery_data_provider_1.GroceryDataProvider])
    ], GroceryListAppComponent);
    return GroceryListAppComponent;
}());
exports.GroceryListAppComponent = GroceryListAppComponent;
//# sourceMappingURL=grocery-list-app.component.js.map