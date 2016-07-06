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
var GroceryList = (function () {
    function GroceryList() {
        this.list = [
            { id: 1, data: 'something1' },
            { id: 2, data: 'something2' },
            { id: 3, data: 'something3' },
            { id: 4, data: 'something4' }
        ];
    }
    GroceryList = __decorate([
        core_1.Component({
            selector: 'grocery-list',
            templateUrl: 'app/grocery-list/grocery-list.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GroceryList);
    return GroceryList;
}());
exports.GroceryList = GroceryList;
//# sourceMappingURL=grocer-list.component.js.map