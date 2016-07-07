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
var grocery_model_1 = require('../grocery.model');
var GroceryItem = (function () {
    function GroceryItem() {
        this.removeItemRequest = new core_1.EventEmitter();
        this.isVisible = true;
    }
    GroceryItem.prototype.clickedRemove = function () {
        this.removeItemRequest.emit({
            id: this.item.id
        });
    };
    GroceryItem.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', grocery_model_1.Grocery)
    ], GroceryItem.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], GroceryItem.prototype, "selectedFilter", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GroceryItem.prototype, "removeItemRequest", void 0);
    GroceryItem = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'grocery-item',
            templateUrl: './grocery-item.html',
            styleUrls: ['./grocery-item.css']
        }), 
        __metadata('design:paramtypes', [])
    ], GroceryItem);
    return GroceryItem;
}());
exports.GroceryItem = GroceryItem;
//# sourceMappingURL=grocery-item.component.js.map