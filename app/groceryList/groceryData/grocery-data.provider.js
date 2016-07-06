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
var GroceryDataProvider = (function () {
    function GroceryDataProvider() {
        this.list = [
            { id: 1, data: 'something1' },
            { id: 2, data: 'something2' },
            { id: 3, data: 'something3' },
            { id: 4, data: 'something4' }
        ];
    }
    GroceryDataProvider.prototype.getData = function () {
        return this.list;
    };
    GroceryDataProvider.prototype.addItem = function (data) {
        this.list.push({ id: this.list.length + 1, data: data });
    };
    GroceryDataProvider.prototype.removeItem = function () {
    };
    GroceryDataProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GroceryDataProvider);
    return GroceryDataProvider;
}());
exports.GroceryDataProvider = GroceryDataProvider;
//# sourceMappingURL=grocery-data.provider.js.map