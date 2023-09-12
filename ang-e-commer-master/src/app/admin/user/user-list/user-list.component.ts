import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
