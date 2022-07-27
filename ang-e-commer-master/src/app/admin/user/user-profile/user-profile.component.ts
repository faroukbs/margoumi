import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: [
    './user-profile.component.css',
    '../../../../assets/admin/css/paper-dashboard.css?v=2.0.1',
    '../../../../assets/admin/demo/demo.css',
    '../../../../assets/admin/css/bootstrap.min.css',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class UserProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
