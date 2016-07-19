import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ItemsService } from './items.service';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ItemsService]
})
export class AppComponent implements OnInit {

  constructor(private itemsService : ItemsService) {}

  ngOnInit() {
  }

}
