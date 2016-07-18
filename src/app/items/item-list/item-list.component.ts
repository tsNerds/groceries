import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ItemComponent, ItemModel } from '../item/';
import { Router, ActivatedRoute } from '@angular/router';

// import { ItemsService } from '../items.service';

@Component({
  moduleId: module.id,
  selector: 'app-item-list',
  templateUrl: 'item-list.component.html',
  styleUrls: ['item-list.component.css'],
  directives: [ItemComponent],
  // providers: [ItemsService],
})
export class ItemListComponent {
  @Input() title : string;
  @Input() items : ItemModel[];
  @Input() filteredStatus : number;
  // public filteredStatus : number;
  // public title          : string = 'sadasda';
  // public items          : Array<ItemModel>;

  @Output() removeItemEvent = new EventEmitter();
  @Output() nextStatusEvent = new EventEmitter();
  @Output() prevStatusEvent = new EventEmitter();

  constructor(private router : Router,
              private route : ActivatedRoute
              // public itemsService : ItemsService
              ) {
  }

  ngOnInit() {
    //  this.route
    //   .params
    //   .subscribe(params => {
    //     console.log('wot?? -> ', params);
    //     this.filteredStatus = +params['status'];
    //     this.title = params['title'];
    //     this.items = this.itemsService.getItemsOfStatus(this.filteredStatus);
    //   });
  }

  getItems() : Array<ItemModel> {
    return this.items;
  }

  getItemsCounter() : number {
    var len : number = 0;
    this.items.forEach(item => {
      if (item.status === this.filteredStatus) {
        len++;
      }
    });

    return len;
  }

  removeItemClicked(item : ItemModel) : void {
    this.removeItemEvent.emit({
      item: item
    });
  }

  nextStatusClicked(item: ItemModel) : void {
    this.nextStatusEvent.emit({
      item: item
    });
  }

  prevStatusClicked(item: ItemModel) : void {
    this.prevStatusEvent.emit({
      item: item
    });
  }
}
