import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.css',
    '../../../assets/admin/css/paper-dashboard.css?v=2.0.1',
    '../../../assets/admin/demo/demo.css',
    '../../../assets/admin/css/bootstrap.min.css',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
