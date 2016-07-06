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
var index_1 = require('./groceryItem/index');
var grocery_data_provider_1 = require('./groceryData/grocery-data.provider');
var GroceryList = (function () {
    function GroceryList(groceryData) {
        this.groceryData = groceryData;
        this.list = [];
        this.list = groceryData.getData();
    }
    GroceryList.prototype.addItem = function () {
        this.groceryData.addItem(this.itemData);
        this.itemData = '';
    };
    GroceryList = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'grocery-list',
            templateUrl: './grocery-list.html',
            directives: [index_1.GroceryItem],
            providers: [grocery_data_provider_1.GroceryDataProvider]
        }), 
        __metadata('design:paramtypes', [grocery_data_provider_1.GroceryDataProvider])
    ], GroceryList);
    return GroceryList;
}());
exports.GroceryList = GroceryList;
//# sourceMappingURL=grocery-list.component.js.map