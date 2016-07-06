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
var GroceryList = (function () {
    function GroceryList() {
        this.addItemRequested = new core_1.EventEmitter();
        this.removeItemRequested = new core_1.EventEmitter();
    }
    GroceryList.prototype.addItem = function () {
        console.log('add');
        this.addItemRequested.emit({
            description: this.itemData
        });
        this.itemData = '';
    };
    GroceryList.prototype.itemRequestedRemove = function (event) {
        this.removeItemRequested.emit(event);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], GroceryList.prototype, "list", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GroceryList.prototype, "addItemRequested", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GroceryList.prototype, "removeItemRequested", void 0);
    GroceryList = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'grocery-list',
            templateUrl: './grocery-list.html',
            directives: [index_1.GroceryItem]
        }), 
        __metadata('design:paramtypes', [])
    ], GroceryList);
    return GroceryList;
}());
exports.GroceryList = GroceryList;
//# sourceMappingURL=grocery-list.component.js.map